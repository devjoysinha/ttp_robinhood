import yfinance as yf
import pandas as pd
import numpy as np
import datetime

# 🧠 Define tickers
# You can pull these lists dynamically or maintain manually
nifty50 = [
    'ADANIENT.NS', 'ADANIPORTS.NS', 'APOLLOHOSP.NS', 'ASIANPAINT.NS', 'AXISBANK.NS',
    'BAJAJ-AUTO.NS', 'BAJFINANCE.NS', 'BAJAJFINSV.NS', 'BHARTIARTL.NS', 'BPCL.NS',
    'BRITANNIA.NS', 'CIPLA.NS', 'COALINDIA.NS', 'DIVISLAB.NS', 'DRREDDY.NS',
    'EICHERMOT.NS', 'GRASIM.NS', 'HCLTECH.NS', 'HDFC.NS', 'HDFCBANK.NS',
    'HDFCLIFE.NS', 'HEROMOTOCO.NS', 'HINDALCO.NS', 'HINDUNILVR.NS', 'ICICIBANK.NS',
    'ITC.NS', 'INFY.NS', 'JSWSTEEL.NS', 'KOTAKBANK.NS', 'LT.NS',
    'M&M.NS', 'MARUTI.NS', 'NESTLEIND.NS', 'NTPC.NS', 'ONGC.NS',
    'POWERGRID.NS', 'RELIANCE.NS', 'SBILIFE.NS', 'SBIN.NS', 'SUNPHARMA.NS',
    'TATACONSUM.NS', 'TATAMOTORS.NS', 'TATASTEEL.NS', 'TCS.NS', 'TECHM.NS',
    'TITAN.NS', 'ULTRACEMCO.NS', 'UPL.NS', 'WIPRO.NS'
]

next50 = [
    'ABB.NS', 'ADANIGREEN.NS', 'ADANITRANS.NS', 'ALKEM.NS', 'AUROPHARMA.NS',
    'BANKBARODA.NS', 'BEL.NS', 'BERGEPAINT.NS', 'BIOCON.NS', 'BOSCHLTD.NS',
    'CANBK.NS', 'CHOLAFIN.NS', 'COLPAL.NS', 'DABUR.NS', 'DLF.NS',
    'GAIL.NS', 'GODREJCP.NS', 'HAL.NS', 'HAVELLS.NS', 'ICICIPRULI.NS',
    'INDIANB.NS', 'IOC.NS', 'IRCTC.NS', 'LICI.NS', 'LTIM.NS',
    'MARICO.NS', 'MUTHOOTFIN.NS', 'NAUKRI.NS', 'PAYTM.NS', 'PIDILITIND.NS',
    'PNB.NS', 'POWERINDIA.NS', 'RECLTD.NS', 'SAIL.NS', 'SIEMENS.NS',
    'SRF.NS', 'TVSMOTOR.NS', 'UBL.NS', 'VEDL.NS', 'VOLTAS.NS',
    'ZYDUSLIFE.NS', 'ICICIGI.NS', 'ADANIPOWER.NS', 'ATGL.NS', 'SHREECEM.NS',
    'TORNTPHARM.NS', 'TRENT.NS', 'HINDPETRO.NS', 'JSWENERGY.NS', 'INDUSTOWER.NS'
]

tickers = nifty50 + next50

# 📆 Backtest period
start = '2025-01-01'
end = datetime.datetime.now().strftime('%Y-%m-%d')

# ⚙️ Strategy params
initial_capital = 500_000
risk_per_trade = 0.02  # 2% of equity each trade
sl_pct = 0.01          # 1% stop-loss
tp_pct = 0.02          # 2% profit target

# 📚 Storage
results = []

for symbol in tickers:
    df = yf.download(symbol, start=start, end=end)
    if df.empty: continue

    # Indicators
    df['50EMA'] = df['Close'].ewm(span=50).mean()
    df['200EMA'] = df['Close'].ewm(span=200).mean()
    delta = df['Close'].diff()
    up = delta.clip(lower=0)
    down = -delta.clip(upper=0)
    avg_gain = up.rolling(14).mean()
    avg_loss = down.rolling(14).mean()
    rs = avg_gain / avg_loss
    df['RSI'] = 100 - (100 / (1 + rs))

    df.dropna(inplace=True)

    # Signals
    
    cond_long = (df['Close'] > df['50EMA']) & (df['Close'] > df['200EMA']) & (df['RSI'] > 40) & (df['RSI'] < 60)
    cond_short = (df['Close'] < df['50EMA']) & (df['Close'] < df['200EMA']) & (df['RSI'] > 40) & (df['RSI'] < 60)
    
    df['signal'] = 0

    df.loc[cond_long, 'signal'] = 1
    df.loc[cond_short, 'signal'] = -1

    equity = initial_capital
    trades = []

    for i in range(1, len(df)):
        sig = df['signal'].iloc[i-1]
        if sig == 0: continue

        price = df['Open'].iloc[i]  # entry next morning
        risk_amt = equity * risk_per_trade
        size = np.floor(risk_amt / (price * sl_pct))

        if size <= 0: continue

        sl = price * (1 - sl_pct * sig)
        tp = price * (1 + tp_pct * sig)

        exit_price = None
        for j in range(i, len(df)):
            h, l = df['High'].iloc[j], df['Low'].iloc[j]
            if sig == 1:
                if l <= sl:
                    exit_price = sl; exit_idx = j; break
                elif h >= tp:
                    exit_price = tp; exit_idx = j; break
            else:
                if h >= sl:
                    exit_price = sl; exit_idx = j; break
                elif l <= tp:
                    exit_price = tp; exit_idx = j; break
        if exit_price is None:
            exit_price = df['Close'].iloc[-1]
            exit_idx = len(df)-1

        ret = (exit_price - price) / price * sig
        pnl = ret * price * size

        trades.append(pnl)
        equity += pnl

    total_return = (equity - initial_capital) / initial_capital * 100
    win_rate = np.mean([1 if t>0 else 0 for t in trades]) * 100 if trades else np.nan

    results.append({'symbol': symbol, 'return_%': round(total_return,2), 'trades': len(trades), 'win_rate_%': round(win_rate,2)})

# 📊 Summary
res_df = pd.DataFrame(results).sort_values('return_%', ascending=False)
print(res_df.head(20))
print(f"\nPortfolio total return: {round((res_df['return_%'].mean()),2)}% (avg per symbol)")
print(f"Total equity after backtest: ₹{round(equity,2)}")
