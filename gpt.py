import os
from openai import OpenAI

# You can set OPENAI_MODEL to override the model at runtime.
# When GPT‑5 becomes available, set OPENAI_MODEL=gpt-5 (or the exact model ID).
MODEL_REQUESTED = os.getenv("OPENAI_MODEL", "gpt-5")  # placeholder
FALLBACK_MODEL = "gpt-4o"  # widely available as of today


client = OpenAI()  # uses OPENAI_API_KEY from the environment

def ask(prompt: str,file_name: str,file_path: str = ".") -> str:
    messages = []
    system = """
You are an expert frontend engineer specializing in Next.js. Your task is to take the provided HTML content and convert it into a Next.js component/page that follows the given theme and styling guidelines. Ensure that:
  1. The code is clean, modular, and production-ready.
  2. Styling strictly follows the provided Next.js theme (e.g., TailwindCSS, shadcn/ui, or custom design system).
  3. The output is fully responsive, accessible (a11y best practices), and optimized for performance.
  4. Use functional components, server/client components where appropriate, and follow Next.js conventions (file structure, imports, dynamic routing if needed).
  5. Use KaTeX to render mathematical notation and equations wherever suitable, ensuring proper formatting and accessibility.
  6. Rewrite the given HTML content in your own words to prevent copyright issues, while retaining its original purpose and meaning.

import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "14.6.4 Median with Unknown Values | Statistics",
  description:
    "Learn when the median can be pinned down even with unknown terms in the set—and when it can't. Includes one quick multiple‑choice example and two Data Sufficiency drills with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6.4 Finding the Median When Some Values Are Unknown
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          To identify a median, you only need the middle item in an ordered odd‑sized list,
          or the two middle items in an ordered even‑sized list. Because of that,
          you can sometimes lock in the median even if certain terms are unknown.
          The key is whether the middle position(s) are determined regardless of those unknowns.
        </p>

        <MustKnow>
          The median is controlled exclusively by the center of the ordered list.
          If the middle position(s) don’t shift as the unknown values move, the median
          is fixed even without knowing those values. If the middle can change, the median
          isn’t determined.
        </MustKnow>

        <MCQExample
          number={43}
          prompt="If S = {x, 4, 3, 12, 11, 10, 10}, what is the median of set S?"
          options={["3", "5", "10", "11", "12"]}
          correct="10"
          solution={
            <>
              <p>
                Order the known values: 3, 4, 10, 10, 11, 12. With x included, there are 7 total terms,
                so the median is the 4th term after sorting.
              </p>
              <p>
                Wherever x lands, the center of the list stays at one of the two adjacent 10s,
                so the 4th term remains 10. Thus, the median is 10.
              </p>
            </>
          }
        />

        <p>
          Don’t overgeneralize, though—unknown terms don’t always leave the median unchanged.
          Test how those variables can slide around the center.
        </p>

        <ExampleCard
          number={44}
          title="Median of S with two unknown integers"
          statements={[
            "S = {3, 5, 8, 20, 20, 20, 15, A, B}, where A and B are integers. What is the median?",
            "1) A &lt; 11 and B &lt; 11",
            "2) B &gt; 8",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We need the middle value of the 9‑term ordered list. Check sufficiency.
              </p>
              <p>
                <strong>Statement (1):</strong> A &lt; 11 and B &lt; 11. Try A=2, B=0 → ordered set has median 8.
                Try A=9, B=9 → ordered set has median 9. Different medians → not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> B &gt; 8, A unrestricted. Try A=6, B=10 → median 10.
                Try A=50, B=10 → median 15. Different medians → not sufficient.
              </p>
              <p>
                <strong>Together:</strong> A &lt; 11 and 8 &lt; B &lt; 11, so integer B is 9 or 10.
                With A=2, B=9 → median 9. With A=2, B=10 → median 10. Still not unique.
              </p>
              <p>Therefore, even combined, the data do not determine a single median. Answer: E.</p>
            </>
          }
        />

        <ExampleCard
          number={45}
          title="Median of S with two unknowns"
          statements={[
            "S = {2, 4, 6, 10, 10, 10, 11, A, B}. What is the median?",
            "1) A &gt; 11",
            "2) B = 6",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                There are 9 terms total, so the median is the 5th term after sorting.
              </p>
              <p>
                Statement (1): A &gt; 11. The three 10s sit in the middle of the list no matter where B falls,
                so the 5th term remains 10. Sufficient.
              </p>
              <p>
                Statement (2): B = 6. The value of A can shift the middle:
                if A = 6 the center can move to 6, but if A = 11 the center stays at 10.
                Not sufficient.
              </p>
              <p>Thus, statement (1) alone suffices; statement (2) alone does not. Answer: A.</p>
            </>
          }
        />

        <p>
          Big picture: the median is about position, not computation.
          When variables can’t move the middle position(s), the median is fixed.
          When they can, you can’t declare a single value.
        </p>
      </article>
    </main>
  );
}
"""
    messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})

    model = MODEL_REQUESTED
    try:
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
        )
    except Exception as e:
        # If the requested model (e.g., gpt-5) isn't available, fall back gracefully
        print(f"Requested model '{model}' unavailable ({e}). Falling back to '{FALLBACK_MODEL}'.")
        model = FALLBACK_MODEL
        resp = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.2,
        )
    content = resp.choices[0].message.content

    abs_path = os.path.abspath(file_path)
    os.makedirs(abs_path, exist_ok=True)

    output_path = os.path.join(abs_path, f"{file_name}.tsx")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    return content

prompt ="""<body class="gmat mathjax-included navbar-hidden study-plan-setting-ondemand ai-assist-enabled" data-action="show" data-controller="lessons" data-legacy-course-enabled="false" data-user-current-date="2025-07-04" data-user-logged-in="true"><div class="uw-sl" role="region" data-uw-rm-ignore="true" data-uw-ignore-translate="true" aria-label="Quick Accessibility Options"><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-skip-to-main"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="26" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g stroke="#000" stroke-width="1.5" fill="none" fill-rule="evenodd"><rect class="no-fill" fill="none" x=".75" y=".75" width="24.5" height="22.5" rx="3"></rect><path class="no-fill" fill="none" d="M1 7h24M9.5 7v17"></path></g></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Skip to main content</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-enable-visibility"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="28" height="26" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M13.808 6.019C8.625 6.019 4.01 9.197 1 14.148c3.01 4.951 7.625 8.129 12.808 8.129s9.797-3.178 12.807-8.129c-3.01-4.951-7.624-8.13-12.807-8.13" stroke="#000" class="no-fill" stroke-width="1.5" fill="none"></path><path d="M13.813 11.124c1.704 0 3.086 1.368 3.086 3.055 0 1.688-1.382 3.055-3.086 3.055s-3.086-1.367-3.086-3.055c0-1.687 1.382-3.055 3.086-3.055m0-3.055c-3.408 0-6.172 2.735-6.172 6.11 0 3.375 2.764 6.11 6.172 6.11s6.172-2.735 6.172-6.11c0-3.375-2.764-6.11-6.172-6.11" class="fill-white" fill="#FFF" fill-rule="nonzero"></path><path d="M17.913 14.18c0 2.244-1.839 4.064-4.105 4.064-2.268 0-4.106-1.82-4.106-4.065s1.838-4.064 4.106-4.064c2.266 0 4.105 1.82 4.105 4.064" stroke="#000" stroke-width="1.5" class="no-fill" fill="none"></path><path class="no-fill" stroke="#FFF" stroke-width="3" stroke-linecap="round" d="M2.872 22.306L22.03 3.339" fill="none"></path><path stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M4.24 23.661L23.398 4.694" class="no-fill" fill="none"></path></g></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Enable accessibility for low vision</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button><button class="uw-sl__item" data-uw-rm-ignore="true" data-uw-ignore-translate="true" lang="en-US" id="uw-open-accessibility"><span class="uw-sl__item__left" data-uw-ignore-translate="true"><span class="uw-sl__item__img"><svg focusable="false" width="23" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path d="M.018 8.639c.105-.595.65-.991 1.223-.877a53.94 53.94 0 0020.517 0c.625-.125 1.228.366 1.242 1.06.01.544-.402 1.003-.915 1.102-2.289.44-4.589.727-6.893.877-.948.063-1.647.948-1.54 1.932l.202 1.84c.314 2.87.958 5.69 1.919 8.399l1.26 3.553c.202.568-.076 1.197-.62 1.407a.994.994 0 01-.364.068c-.4 0-.768-.245-.944-.638l-.007.007-.325-.724a110.53 110.53 0 01-2.83-6.926.462.462 0 00-.878 0 105.146 105.146 0 01-2.832 6.917l-.308.68.005-.021a1.05 1.05 0 01-.98.705.994.994 0 01-.364-.068c-.544-.21-.821-.839-.62-1.407l1.26-3.553a37.235 37.235 0 001.92-8.403l.2-1.824c.107-.986-.59-1.881-1.54-1.943A55.94 55.94 0 01.86 9.914c-.57-.11-.947-.68-.841-1.275zM11.5 0c1.934 0 3.502 1.634 3.502 3.651 0 2.016-1.568 3.65-3.502 3.65-1.934 0-3.502-1.634-3.502-3.65C7.998 1.634 9.566 0 11.5 0z" fill="#000" fill-rule="evenodd"></path></svg></span><span class="uw-sl__item__title" data-uw-ignore-s17="" data-uw-rm-ignore="true" data-uw-ignore-translate="true">Open the accessibility menu</span></span><span class="uw-sl__e-icon"><svg width="26" height="27" role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g class="no-fill" fill="none" fill-rule="evenodd"><path d="M4.498 24.3v-.872H1.5v-1.37h2.716v-.872H1.5v-1.27h3v-.872H.542V24.3h3.955zm1.909 0v-3.695L9.183 24.3h.95v-5.256h-.95v3.695l-2.776-3.695H5.45V24.3h.957zm7.21 0v-4.383h1.682v-.873h-4.314v.873h1.683V24.3h.948zm6.421 0v-.872H17.04v-1.37h2.716v-.872H17.04v-1.27h3v-.872h-3.956V24.3h3.955zm1.84 0v-1.767h1.017l1.24 1.767h1.086l-1.316-1.867c.757-.237 1.27-.849 1.27-1.644 0-1.025-.842-1.745-1.966-1.745H20.92V24.3h.957zm1.224-2.647h-1.224v-1.729h1.224c.65 0 1.101.33 1.101.865 0 .535-.451.864-1.101.864z" fill="#000" fill-rule="nonzero"></path><path class="no-fill" fill="none" d="M18.9 1v6.3a2.7 2.7 0 01-2.7 2.7H5.4h0" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M8.1 12.7L5.4 10l2.7-2.7"></path></g></svg></span></button></div><div class="uwy userway_p5" data-uw-feature-ignore="true" data-uw-rm-ignore="true" title="Accessibility Menu" style="background-color: transparent !important; overflow: initial !important;"><div class="userway_buttons_wrapper"><div class="ulsti hidden userway_dark" id="userwayLstIcon" aria-label="Translations Menu" role="button" tabindex="0" aria-haspopup="dialog" data-uw-s19-ignore="" title="Translations Menu" style="background: rgb(108, 111, 108) !important;"><span class="uiiw"></span><div class="ups"><img width="43" height="43" data-uw-rm-ignore="" class="si_w" aria-hidden="true" alt="Spinner: White decorative" src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"></div><span class="usr lst-spacer"></span></div><div class="uai userway_dark" id="userwayAccessibilityIcon" aria-label="Accessibility Menu" role="button" tabindex="0" aria-haspopup="dialog" title="Accessibility Menu" style="background: rgb(108, 111, 108) !important;"><span class="uiiw"><img data-uw-rm-ignore="" class="ui_w" role="presentation" alt="" src="https://cdn.userway.org/widgetapp/images/body_wh.svg"></span><div class="ups"><img width="43" height="43" data-uw-rm-ignore="" class="si_w" aria-hidden="true" alt="Spinner: White decorative" src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"></div><span class="usr"></span></div><div class="uwaw-dictionary-tooltip"></div></div><iframe class="uwif userway_p5" data-uw-ignore-translate="true" name="userway" title="UserWay Accessibility Menu" allow="clipboard-write" style="max-width: 100vw !important; visibility: visible !important; opacity: 1 !important; color-scheme: light !important;"></iframe></div><div class="uw-s10-bottom-ruler-guide"></div><div class="uw-s10-right-ruler-guide"></div><div class="uw-s10-left-ruler-guide"></div><div class="uw-s10-reading-guide"><div class="uw-s10-reading-guide__arrow"></div></div><div class="uw-s12-tooltip" aria-hidden="true"></div><div style="visibility: hidden; overflow: hidden; position: absolute; top: 0px; height: 1px; width: auto; padding: 0px; border: 0px; margin: 0px; text-align: left; text-indent: 0px; text-transform: none; line-height: normal; letter-spacing: normal; word-spacing: normal;"><div id="MathJax_Hidden"></div></div><div id="MathJax_Message" style="display: none;"></div>
<div id="loading-overlay" style="display: none;">
<img height="80" alt="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/logo_arrow-fa7650ea0025c7daf8754ac1b14ad40acef3ff9c7136a5f48eba2a8e9f3a783c.svg" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG">
</div>
<div class="study-plan" id="loading-overlay-dark">
<div class="d-flex justify-content-center align-items-center h-100">
<lottie-player background="transparent" loop="" speed="1" src="https://d2c3i42f9kiq5f.cloudfront.net/study_plan_loading.json"></lottie-player>
</div>
</div>
<div class="d-none text-center show_ondemand_welcome" id="welcome-ondemand-screen">
<img alt="Welcome to TTP OnDemand" class="mb-5 welcome-logo" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/users/study_plan/ondemand/welcome_ondemand_logo-cc0ebff9742341906b25183140194850153ae668a94ff1e07666c6341d391374.svg" data-uw-rm-alt-original="Welcome to TTP OnDemand" role="img" data-uw-rm-alt="ALT">
<div class="fw-bold fs-34 fw-semibold mx-4 text-light d-flex align-items-center justify-content-center flex-column flex-md-row">
Welcome to TTP
<span class="ondemand-logo fs-31 fw-bold ms-2">
<img alt="Welcome to TTP OnDemand" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/ondemand/shared/ondemand_logo-2c0129433c92d7377873eed0d16aca44a64c45897772b79440eba38fa3a44a5b.svg" data-uw-rm-alt-original="Welcome to TTP OnDemand" role="img" data-uw-rm-alt="ALT">
</span>
</div>
<div class="description fs-28 mt-5">
We’re setting up your new course and supercharging your experience <span>with premium features</span>
</div>
</div>

<div class="container" id="messages">
</div>

<div class="chat-ai-available" id="lessons-wrapper">
<section class="section-content quant" data-lesson-id="2261" id="lesson-show">
<div class="lesson-nav navbar navbar-expand-lg">
<div class="container">
<div class="d-flex align-items-center w-100 justify-content-between nav-header">
<div class="leftside-links d-flex align-items-center">
<ul class="ps-0 mb-0 mb-lg-0 d-flex float-start align-items-center">
<li class="nav-item list-unstyled">
<a class="fw-bold navigator-back text-nowrap d-inline-flex" href="/study_plan"><i class="far fa-arrow-left"></i><span class="d-md-block d-none ms-1 me-1">Back to</span><span class="d-md-block d-none text-capitalize">Study Plan</span></a>
</li>
<li class="nav-item list-unstyled">
<a class="nav-link see-all-topics" href="#">
<span>
<i class="far fa-list-ul"></i>
</span>
<span class="visually-hidden">View all topics</span>
</a>
</li>
</ul>
<div class="w-100 lesson-progress-bar desktop" style="">
<div class="d-flex align-items-center justify-content-between">
<div class="fw-semibold progress-percentage text-grey-10">
<span class="hidden-mobile">Chapter</span> Progress: 75 %
</div>
<div class="lesson-completion text-grey-8">
21 / 28 Lessons Read
</div>
</div>
<div class="progress progress-bar-wrapper">
<div class="progress-bar" role="progressbar" style="width: 75%"></div>
</div>

</div>
</div>
<div class="rightside-links">
<ul class="p-0 d-flex mb-0">
<li class="list-unstyled float-start">
<a class="d-flex align-items-center" id="note-guide-button">
<i class="far fa-sticky-note"></i>
<span class="text-nowrap" id="note-guide-text">Note Guide</span>
</a>
</li>
<li class="list-unstyled float-start">
<div class="flags">
<a class="flag bookmark d-flex align-items-center " href="/flag/lesson/review/2261"><div>
<i class="far fa-bookmark"></i>
<i class="fas fa-bookmark"></i>
</div>
<span class="legend text-nowrap" id="bookmark-text">
Bookmark
</span>
</a></div>
</li>
<li class="list-unstyled float-start toggle-fullscreen">
<a class="d-flex align-items-center" id="toggle-fullscreen">
<i class="fas fa-expand"></i>
<span class="text-nowrap" id="fullscreen-text">Full Screen</span>
</a>
</li>
</ul>
</div>
</div>
<div class="w-100 lesson-progress-bar mobile">
<div class="d-flex align-items-center justify-content-between">
<div class="fw-semibold progress-percentage text-grey-10">
<span class="hidden-mobile">Chapter</span> Progress: 75 %
</div>
<div class="lesson-completion text-grey-8">
21 / 28 Lessons Read
</div>
</div>
<div class="progress progress-bar-wrapper">
<div class="progress-bar" role="progressbar" style="width: 75%"></div>
</div>

</div>
</div>
</div>

<div class="lesson-body position-relative">
<div class="m-0" id="lesson-content-wrapper">
<div class="main-content container lesson-content">
<div class="title-wrapper">
<h1 class="title chapter-name" data-chapter-id="586">19. Functions and Sequences</h1>
</div>
<div class="subtitle-wrapper">
<h2 class="subtitle topic-name text-grey-1">19.20 Equally Spaced Tick Marks</h2>
</div>
<div class="content noteable lesson-description">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="7c6040a7ae991c387781f64f3c58b005">Some GMAT questions provide a partially labeled number line in which the tick marks are equally spaced.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="a5dbf80afb0dd77817445542ffed2f65"> We must then determine the value(s) of one or more of the unknown tick marks.</span></p>
<blockquote class="must-know" id="must_know-6532">
<div>
<div class="header">
<strong>Must Know:</strong>
<div class="flags">
<a href="/flag/must_know/review/6532"><i class="fas fa-bookmark"></i>
<i class="far fa-bookmark"></i>
<span class="visually-hidden">Toggle bookmark</span>
</a>
</div>
</div>
<div class="content pe-0 pe-md-4">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="c9d863ef8cb13982ac4d5316856f44c8">Some GMAT questions ask us to determine one or more unknown values on a number line that has equally spaced tick marks.</span></p>

</div>
</div>
</blockquote>
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="61aaeda9af3f29b01aa515baadea8f5f">When the tick marks on a number line are <em>equally spaced</em>, the difference between any two consecutive tick marks is constant.</span></p>
<blockquote class="must-know" id="must_know-6533">
<div>
<div class="header">
<strong>Must Know:</strong>
<div class="flags">
<a href="/flag/must_know/review/6533"><i class="fas fa-bookmark"></i>
<i class="far fa-bookmark"></i>
<span class="visually-hidden">Toggle bookmark</span>
</a>
</div>
</div>
<div class="content pe-0 pe-md-4">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="61aaeda9af3f29b01aa515baadea8f5f">When the tick marks on a number line are <em>equally spaced</em>, the difference between any two consecutive tick marks is constant.</span></p>

</div>
</div>
</blockquote>
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="fffbe0c7dba004f63a019e502efeee89">Consider this example of a number line with equally spaced tick marks:</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="26b8c15609c206346d24dad17e6d741a"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1771/content_pic1.png" style="width:550px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="0b89e2f83b29b554fa15841073826009">Notice that when we subtract a known value on the number line from the next value on the number line, we always get a difference of 3.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="506c2c0c7f5b70af3df68c45c46f45a7">For example:</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="65673a21550e1bad39bfbe76e9e5bb81"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-526-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8750" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8751"><span class="semantics" id="MathJax-Span-8752"><span class="mo" id="MathJax-Span-8753" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-526"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> (-1) <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-527-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8754" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8755"><span class="semantics" id="MathJax-Span-8756"><span class="mo" id="MathJax-Span-8757" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-527"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> (-4) = 3</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="e74555cb6f84aac092d3cfef3b94cc21"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-528-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8758" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8759"><span class="semantics" id="MathJax-Span-8760"><span class="mo" id="MathJax-Span-8761" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-528"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> 2 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-529-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8762" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8763"><span class="semantics" id="MathJax-Span-8764"><span class="mo" id="MathJax-Span-8765" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-529"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> (-1) = 3</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="bcebcda3bd0ff64f0cb81b40c0c61d34"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-530-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8766" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8767"><span class="semantics" id="MathJax-Span-8768"><span class="mo" id="MathJax-Span-8769" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-530"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> 5 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-531-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8770" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8771"><span class="semantics" id="MathJax-Span-8772"><span class="mo" id="MathJax-Span-8773" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-531"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 2 = 3</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="1826e1e2680e9cc475a5f83f6e964691"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-532-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8774" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8775"><span class="semantics" id="MathJax-Span-8776"><span class="mo" id="MathJax-Span-8777" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-532"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> 8 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-533-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8778" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8779"><span class="semantics" id="MathJax-Span-8780"><span class="mo" id="MathJax-Span-8781" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-533"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 5 = 3</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="07ba0a072fe22a641f2cb5de842cac95"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-534-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8782" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8783"><span class="semantics" id="MathJax-Span-8784"><span class="mo" id="MathJax-Span-8785" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-534"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> 11 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-535-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8786" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8787"><span class="semantics" id="MathJax-Span-8788"><span class="mo" id="MathJax-Span-8789" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-535"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 8 = 3</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="39da578b0a28c91cf7ead705969bd671"><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-536-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8790" style="width: 0.911em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.911em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.684em, -0.361em); top: -2.498em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8791"><span class="semantics" id="MathJax-Span-8792"><span class="mo" id="MathJax-Span-8793" style="font-family: MathJax_Main;">⇒</span></span></span><span style="display: inline-block; width: 0px; height: 2.502em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.639em; vertical-align: -0.089em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-536"><math> <semantics> <mo>⇒</mo> </semantics> </math></script></span> 14 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-537-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8794" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8795"><span class="semantics" id="MathJax-Span-8796"><span class="mo" id="MathJax-Span-8797" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-537"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 11 = 3</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="88bf36afb26a53915f0f8c163756846a">Suppose we want to determine the value of x.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="1a151f8ae55d23e9d44a9fc53d28303a"> Since 14, x, and 20 are consecutive values on the number line, we know that x must be between 14 and 20, 3 units away from each of them.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="0e9654d3b66f051caab6d308096129ab"> Thus, x must be equal to 14 + 3 = 17.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="a9f1d27bf5969be450e52880d6948db3"> Or, put another way, x must equal 20 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-538-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8798" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8799"><span class="semantics" id="MathJax-Span-8800"><span class="mo" id="MathJax-Span-8801" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-538"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 3 = 17.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="a21ade9aae1be3f3b420272399735d37">So, we can now create the following rule:</span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="b90807a02472017119e8a018622d024b"><em>If x and y are consecutive values on a number line with equally spaced tick marks and x &lt; y, then the common difference will be y </em><em><span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-539-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8802" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8803"><span class="semantics" id="MathJax-Span-8804"><span class="mo" id="MathJax-Span-8805" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-539"><math> <semantics> <mo>–</mo> </semantics> </math></script></span></em><em> x.</em></span></p>
<blockquote class="must-know" id="must_know-6534">
<div>
<div class="header">
<strong>Must Know:</strong>
<div class="flags">
<a href="/flag/must_know/review/6534"><i class="fas fa-bookmark"></i>
<i class="far fa-bookmark"></i>
<span class="visually-hidden">Toggle bookmark</span>
</a>
</div>
</div>
<div class="content pe-0 pe-md-4">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="960859e3bd38f0a2d63510fc1ed795b1">If x and y are consecutive values on a number line with equally spaced tick marks and x &lt; y, then the common difference will be y <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-540-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8806" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8807"><span class="semantics" id="MathJax-Span-8808"><span class="mo" id="MathJax-Span-8809" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-540"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> x.</span></p>

</div>
</div>
</blockquote>
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="782e56584ec0c3035253d6542970e35a">As you might imagine, finding the common difference of a given number line is a key component when solving tick mark questions.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="da46d7b79468e02105ed461744533f71">Consider this mini-example:</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b5e4135d7ed9a220b7ea8d7daf6da53e"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1772/content_pic1.png" style="width:550px"></span></p>

<p class="indented2"><span class="notetaking-preselection mathjax-loaded" data-checksum="5dee7b41872ad81e4010e798582c0c78"><em>If the tick marks on the number line are equally spaced, what is the value of j + k? </em></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b9d7bd7ef784d4cca7864a91669d024d">Recall that when the tick marks on a number line are equally spaced, the difference between any two consecutive tick marks is constant.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="6c620b517c4d7655cfaaebc67ac9b787">Since 29 and 35 are consecutive values on this number line, we can see the common difference between consecutive values will be 35 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-541-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8810" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8811"><span class="semantics" id="MathJax-Span-8812"><span class="mo" id="MathJax-Span-8813" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-541"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 29 = 6.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="c74fa6594dd85704edf5c81ee4edc452"> In other words, the value of each successive tick mark <em>increases by 6</em> as we move from left to right.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b14c4482c18aa41f1ed32d80e0715424">So, on this number line, the number after 35 is 35 + 6 = 41, and the number after 41 is 41 + 6 = 47, which we can show on the number line as follows:</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="6b013ad3fb6808f51f26eb74c4964e50"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1773/content_pic1.png" style="width:550px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b0e47fd8d02b23e8b1b5cab9ea51fbfd">To find the remaining values on the number line, we must recognize that, as we move from <em>right to left</em> on the number line, the value of each successive tick mark <em>decreases by 6</em>.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="55e7f907d95f0084ce853aab4d26d717">So, the values of the tick marks to the left of 29 will be 29 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-542-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8814" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8815"><span class="semantics" id="MathJax-Span-8816"><span class="mo" id="MathJax-Span-8817" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-542"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 6 = 23, and then 23 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-543-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8818" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8819"><span class="semantics" id="MathJax-Span-8820"><span class="mo" id="MathJax-Span-8821" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-543"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 6 = 17, and so on.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="0026336a1874ccae7aca235c5acef5b6">Continuing with this process, we get:</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="5ef8db5f9fe8b04d1ef661231a6369b4"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1774/content_pic1.png" style="width:550px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="1f977e6433541bbc694f0e035771f699">Now that we know j = 5 and k = 47, we can conclude that j + k = 5 + 47 = 52.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="f8c19db727fc2f223dcca8a0a1836131">Let’s practice with some examples.</span></p>
<div class="example exercise problem_solving quant" data-ai-assist-example-url="/ai_assist/exercises/load_ai_assist_exercises" data-correct-option="2" data-id="11813" data-lessons="0" data-solved="" data-word-definitions-url="/word_definitions/quant/fetch_for_exercise?exercise_id=11813" id="example-11813">
<div class="exercise-correctness-bar">
<i class="fas fa-check-circle text-green-2"></i>
<i class="fas fa-times-circle text-red-2"></i>
</div>
<div class="header overflow-visible">
<div class="align-items-xl-center d-flex justify-content-xl-between flex-xl-row justify-content-start align-items-start flex-row tool-box-wrapper gap-3">
<div class="d-flex align-items-center w-100 overflow-hidden">
<h3 class="section-color-2 d-flex align-items-center">
Example 47
</h3>
<div class="tools w-auto shadow-none example-level">
<div class="test-lvl-container">
<span class="test-lvl difficulty with-background fs-14 ms-2 easy">
easy
</span>
</div>
</div>
<div class="line-container section-border-color-4"></div>
</div>
<div class="d-flex position-relative">
<div class="tools gmat">
<div class="tools-inner-wrapper d-flex justify-content-center align-items-center">
<div class="ai-assist-toolbox d-flex">
<div class="ai-toolbox-btn">
<button class="ai-example-assist-btn ai-example fs-13 fw-semibold text-uppercase disabled disabled-state" data-ai-learning-disclaimer-modal-flag="false" data-bs-target="#ai-learning-disclaimer-modal-11813" data-bs-toggle="modal" data-example-id="11813" data-flag-url="/flag/user/first_visit_for_ai_learning_disclaimer_modal/291493/flag" type="button">
<div class="d-flex gap-2 align-items-center">
<img alt="Chat Icon" width="30" height="35" class="ai-asist-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<img alt="Chat Icon" width="30" height="35" class="ai-asist-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon_grey-6ac818542ceac371ecd3a18e8b1da965a482298eff2fd85f1ad82428a1cc1d73.svg">
<div class="fs-13 fw-semibold d-none d-xl-inline d-md-inline">New Example</div>
<span class="fs-13 fw-semibold d-md-none">New Ex</span>
</div>
</button>
<span class="custom-ai-example-tooltip position-absolute text-white p-3 d-none">Once solved, create a new example with AI using this one as a starting point, tailored to the difficulty level you choose.</span>
</div>
<div class="ai-toolbox-btn chat-button">
<button class="ai-example-assist-btn fs-13 ai-tutor-btn fw-semibold" data-tutor-id="ai-tutor-11813">
<div class="assist-btn">
<div class="d-flex gap-2">
<img alt="Chat Icon" width="30" height="35" class="hint-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/hint_icon-55db44b63c2405204c1b2627556dc06a81209dfe5a10ea2866525697bb802af2.svg">
<div class="fs-13 fw-semibold">AI TUTOR</div>
</div>
</div>
</button>
</div>
</div>
<div class="ai-assist-tutor-container d-none ui-draggable" id="ai-tutor-11813">
<div class="ai-assist-tutor-content draggable" data-exercise-id="11813">
<div class="ai-assist-tutor-header d-flex align-items-center ui-draggable-handle">
<span><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/hint_icon-55db44b63c2405204c1b2627556dc06a81209dfe5a10ea2866525697bb802af2.svg"></span>
<h5 class="help-text">Need a Little Help?</h5>
<button aria-label="Close" class="btn-close" type="button"></button>
</div>
<div class="tutor-gradient">
<div class="tutor-body">
<div class="tutor-left">
<div class="tutor-content-icon question-chat-icon">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor-2304921403e286ede9231849dd8659fac282c218431ffff2266cd8b2e33579a0.webp">
</div>
<div class="default-message-wrapper">
<div class="m-0">Hi Joy, do you need a hint for this example?</div>
</div>
</div>
<div class="tutor-btn-chat">
<button class="fw-semibold" id="hint-button" type="button">
Give me a hint
</button>
</div>
</div>
<form class="tutor-footer d-flex align-items-center tutor-form" data-ai-tutor-url="/ai_assist/tutors" data-exercise="11813" data-id="#chat-form-11813" data-img-url="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor-2304921403e286ede9231849dd8659fac282c218431ffff2266cd8b2e33579a0.webp" data-initials="JS" data-section="quant" data-source="">
<input class="form-control chat-tutor-input fs-16" maxlength="2048" placeholder="Write your question here..." rows="1" type="text" data-uw-rm-form="fx" aria-label="Write your question here..." data-uw-hidden-control="hidden-control-element">
<button class="ai-tutor-send-icon d-flex justify-content-center align-items-center" data-bs-placement="top" data-bs-toggle="tooltip" id="send-button" title="" type="submit" data-bs-original-title="Send">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor_send_icon-7810c960045b51dbbb8d8542ea3746a3f5862b2890b8ffdf9801fa8d09a0caf8.svg">
</button>
</form>
</div>
</div>
<div class="resize-handle"></div>

</div>
<a class="activate-whiteboard far fa-tv" data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="Whiteboard" aria-label="Whiteboard"></a>
<div class="flags" data-bs-placement="top" data-bs-toggle="tooltip" title="" data-bs-original-title="Bookmark">
<a class="flag_link " aria-label="Toggle bookmark" href="/flag/example/review/11813"><i class="far fa-bookmark"></i>
<i class="fas fa-bookmark"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="content"><div class="d-inline-block w-100 interrogation_part">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="8cfa917d6ba81fc37fbc1a08e60235ba"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1775/content_pic1.png" style="width:550px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="e448b62210ad145b28d93c93aab8eafa">If the tick marks on the number line are equally spaced, what is the value of d<sup>c </sup>?</span></p>

</div><div class="answers">
<input class="js-exercise-answer" type="hidden">
<div class="answer">
<label>
<label class="visually-hidden" for="answer-0">Option 0</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-0" name="answer-11813" type="radio" value="0" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="c4ca4238a0b923820dcc509a6f75849b">1</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-1">Option 1</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-1" name="answer-11813" type="radio" value="1" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="d3d9446802a44259755d38e6d163e820">10</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-2">Option 2</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-2" name="answer-11813" type="radio" value="2" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="f899139df5e1059396431415e770c6dd">100</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-3">Option 3</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-3" name="answer-11813" type="radio" value="3" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="c9e919815777627095c51eda50c5713a">1,000</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-4">Option 4</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-4" name="answer-11813" type="radio" value="4" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="a980f22074119d4103953f70f2fd69ce">1,024</span></p>

</span>
</div>
</div><a class="btn confirm-answer" data-exercise-id="11813" href="#">Confirm your answer</a><div class="see-solution">
<a href="#"><span class="show-solution">
Show solution
<i class="far fa-chevron-down"></i>
</span>
<span class="hide-solution">
Hide solution
<i class="far fa-chevron-up"></i>
</span>
</a>
</div><div class="info-wrapper">
<div class="info-box solution-wrapper">
<div class="instructors align-items-center">
<span class="presented-by">PRESENTED BY :</span>
<div class="instructor-info d-flex">
<span class="instructor-img ondemand-instructor-image-11813 d-none"><img src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/instructor/image/3/scott.jpg"></span>
<span class="instructor-name ondemand-instructor-name-11813 d-none">Scott Woodbury-Stewart</span>
<span class="instructor-title ondemand-instructor-title-11813 d-none">Founder and Expert GMAT Instructor</span>
<span class="instructor-img screenshare-instructor-image-11813"><img src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/instructor/image/12/Jeff-profile-picture-no-gradient-600x684.png"></span>
<span class="instructor-name screenshare-instructor-name-11813">Jeff Miller</span>
<span class="instructor-title screenshare-instructor-title-11813">COO &amp; Expert GMAT Instructor</span>
</div>
<span class="blue-dots"><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/grid4x4-49799574016865d51bba173c0201f48fc2fc3dd55400daedca878925a75c417c.svg"></span>
</div>
<div class="info-box-content">
<div class="video-wrapper">
<iframe allowfullscreen="" frameborder="0" mozallowfullscreen="" src="https://player.vimeo.com/video/1033532743" webkitallowfullscreen="" title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
</div>

<p class="solution-title"><span class="notetaking-preselection mathjax-loaded" data-checksum="1042160741aef3c9d183a38372ce7c9e">
<b>Text Solution:</b>
</span></p>
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="e5a2082ab5049f61698e3d41395ae8eb"><br>
When the tick marks on a number line are equally spaced, the difference between any consecutive tick marks is constant.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="8f2b0fa0aca3607b927fd264e41819b1">Since 18 and 22 are consecutive values on this number line, we can see the common difference between consecutive values will be 22 <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-544-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8822" style="width: 0.566em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.566em; height: 0px;"><span style="position: absolute; clip: rect(1.691em, 1000em, 2.128em, -0.559em); top: -2.184em; left: 0.003em;"><span class="mrow" id="MathJax-Span-8823"><span class="semantics" id="MathJax-Span-8824"><span class="mo" id="MathJax-Span-8825" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span><span style="border-left: 0.003em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.191em; vertical-align: 0.191em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-544"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> 18 = 4.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="bea822e616bd32da44714e18cc3cfeda"> In other words, the value of each successive tick mark <em>increases by 4</em> as we move from <em>left to right</em> along the number line.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="10719c5ad87eab1f0a5b97af610d59bb"> Conversely, as we move from <em>right to left</em> on the number line, the value of each successive tick mark <em>decreases by 4</em>.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="295fa5f68a13b1ca7c63082e37885646">With this in mind, we can find the values of the unknown tick marks as follows:</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="52572736e26c351e6e1cfdaaa4f880e5"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1776/content_pic1.png" style="width:550px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b47f7d9ab0ab622761c2d89045d23d56">At this point, we can see that c = 2 and d = 10, which means <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-545-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8826" style="width: 6.191em; display: inline-block;"><span style="display: inline-block; position: relative; width: 6.191em; height: 0px;"><span style="position: absolute; clip: rect(1.066em, 1000em, 2.378em, -0.497em); top: -2.184em; left: 0.003em;"><span class="mrow" id="MathJax-Span-8827"><span class="semantics" id="MathJax-Span-8828"><span class="mrow" id="MathJax-Span-8829"><span class="msup" id="MathJax-Span-8830"><span style="display: inline-block; position: relative; width: 1.128em; height: 0px;"><span style="position: absolute; clip: rect(1.316em, 1000em, 2.378em, -0.497em); top: -2.184em; left: 0.003em;"><span class="mi" id="MathJax-Span-8831" style="font-family: MathJax_Math-italic;">d<span style="display: inline-block; overflow: hidden; height: 1px; width: 0.003em;"></span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span><span style="position: absolute; top: -2.559em; left: 0.628em;"><span class="mi" id="MathJax-Span-8832" style="font-size: 90%; font-family: MathJax_Math-italic;">c</span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span></span><span class="mo" id="MathJax-Span-8833" style="font-family: MathJax_Main; padding-left: 0.253em;">=</span><span class="msup" id="MathJax-Span-8834" style="padding-left: 0.253em;"><span style="display: inline-block; position: relative; width: 1.503em; height: 0px;"><span style="position: absolute; clip: rect(1.316em, 1000em, 2.378em, -0.497em); top: -2.184em; left: 0.003em;"><span class="mrow" id="MathJax-Span-8835"><span class="mn" id="MathJax-Span-8836" style="font-family: MathJax_Main;">10</span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span><span style="position: absolute; top: -2.559em; left: 0.941em;"><span class="mn" id="MathJax-Span-8837" style="font-size: 90%; font-family: MathJax_Main;">2</span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span></span><span class="mo" id="MathJax-Span-8838" style="font-family: MathJax_Main; padding-left: 0.253em;">=</span><span class="mn" id="MathJax-Span-8839" style="font-family: MathJax_Main; padding-left: 0.253em;">100</span></span></span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span><span style="border-left: 0.003em solid; display: inline-block; overflow: hidden; width: 0px; height: 1.128em; vertical-align: -0.059em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-545"><math> <semantics> <mrow> <msup> <mi>d</mi> <mi>c</mi> </msup> <mo>=</mo><msup> <mrow> <mn>10</mn></mrow> <mn>2</mn> </msup> <mo>=</mo><mn>100</mn></mrow> </semantics> </math></script></span>.</span></p>

<div class="solution">
Correct answer:
<span class="not-noteable">C</span>
</div>
</div>

</div>
</div></div>





</div>
<div class="modal fade ai-example-generate-modal" data-ai-example-url="/ai_assist/exercises?exercise_id=11813" data-id="ai-example-form" data-remaining-generation="1" id="ai-example-generate-modal-11813" tabindex="-1">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-header position-relative">
<h5 class="modal-title fs-19 fw-semibold">
<img alt="" width="20" height="23" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
&nbsp;AI Example Generator
<span class="beta">BETA</span>
</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<div class="ai-modal-details fs-16">Our AI will create a new example based on the current one, adjusted to the difficulty level you choose:</div>
<form data-remote="true" class="ai-example-form" action="/ai_assist/exercises?exercise_id=11813" accept-charset="UTF-8" method="post">
<input name="utf8" type="hidden" value="✓" autocomplete="off"><div class="row">
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_0" for="difficulty_0"></label>
<div class="ttp-assist-wrapper ai-card text-center selected" data-difficulty="easy">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_0-385572dac42b0bb762e0935a35f21a36761093dc812c73cb14c3012f837d8c65.svg">
<div class="fs-16 mt-3 mb-0 card-title">Easier</div>
<input value="easy" id="difficulty_0" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_1" for="difficulty_1"></label>
<div class="ttp-assist-wrapper ai-card text-center" data-difficulty="same">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_1-9eb5c556fa9cd806edf2fb7eb3e384f04df0d10d5b65a830561c82c1d869eb6e.svg">
<div class="fs-16 mt-3 mb-0 card-title">Same Difficulty</div>
<input value="same" id="difficulty_1" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_2" for="difficulty_2"></label>
<div class="ttp-assist-wrapper ai-card text-center" data-difficulty="hard">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_2-cbc1b1a6176bec7b1cb8d820f5fbab65d68e808d5fd3714e6c2d93c6a23051e1.svg">
<div class="fs-16 mt-3 mb-0 card-title">Harder</div>
<input value="hard" id="difficulty_2" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<input id="selected_difficulty" name="difficulty" type="hidden" value="easy">
</div>
<div class="text-uppercase fs-13 fw-semibold w-100 text-center generate-text m-0 mb-3">
Generations left: 1
</div>
<div class="modal-footer d-flex justify-content-center border-0">
<button aria-label="Close" class="btn btn-primary cancel-btn fs-14 fw-semibold" data-bs-dismiss="modal" type="button">CANCEL</button>
<button class="btn btn-primary generate-btn fs-14 fw-semibold" type="submit">GENERATE</button>
</div>
<hr class="bg-grey-6">
<div class="fs-13 text-grey-4 text-center">
<img alt="" width="20" height="23" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<span class="ms-2">LLM technology can make mistakes. Check important information.</span>
</div>
</form>
</div>
</div>
</div>
</div>

<div class="modal fade ai-learning-modal" id="ai-learning-disclaimer-modal-11813">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="d-flex justify-content-end btn-close-head">
<button class="fas btn-close" data-bs-target="#ai-example-generate-modal-11813" data-bs-toggle="modal" type="button"></button>
</div>
<div class="modal-wrapper">
<div class="modal-title fs-24 text-center">
<span>We’re Excited for You to Supercharge Your Learning with</span>
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_ai_logo-8d22d9d46cea8e3902fde5fa0935adb48ae675264d82d6e30015509269d25ae8.svg">
</div>
<div class="modal-details fs-16 text-center">
<span class="fw-bold">TTP AI </span> has <span class="fw-bold">incredible capabilities</span> and <span class="fw-bold">responds impressively</span> to most prompts. However, please keep in mind that AI is still an emerging technology. So, while TTP AI can be used for supplemental practice, on rare occasions, you may find small inaccuracies in AI-generated examples. That’s why your course  <span class="fw-bold">already includes over 4,000 practice questions</span> expertly crafted by our (human) GMAT experts—more than enough to help you crush your score goal. We’ve got you covered!</div>
</div>
<div class="modal-btn d-flex justify-content-center">
<button class="fs-16 fw-semibold text-light" data-bs-target="#ai-example-generate-modal-11813" data-bs-toggle="modal" type="button">OK, GOT IT</button>
</div>
</div>
</div>
</div>
</div>


<section class="modal frequently-asked-question-modal" id="frequently-asked-question-11813">
<div class="modal-dialog modal-dialog-centered modal-xl">
<div class="modal-content">
<div class="col d-flex align-items-center frequently-modal-header">
<span class="question-circle">
<i class="fal fa-question text-white fs-20 fw-semibold"></i>
</span>
<div class="title fs-18 fw-semibold ms-3">Frequently Asked Questions</div>
<button class="align-self-center btn-close text-grey-4 ms-auto" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close modal</span>
</button>
</div>
<div class="modal-body">
<div class="container-auto">
<div class="row">

</div>
</div>
</div>
</div>
</div>
</section>

<div class="d-none render-ai-example" data-exercise-id="11813">
<div class="generating-ai w-100 mb-5">
<div class="d-flex flex-column h-100 align-items-center justify-content-center">
<div class="ai-assist-example-loader">
<lottie-player autoplay="" background="transparent" class="example-loader-element" direction="1" loop="" playmode="normal" speed="1" src="https://lottie.host/36e49cc9-9f39-49fe-989a-9399f7b418fa/wIXgrq4eoj.json"></lottie-player>
</div>
<div class="d-flex align-items-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<div class="p ai-loader-text fs-24 fw-semibold ms-3">Generating AI Example...</div>
</div>
</div>
</div>

</div>
<div class="example exercise problem_solving quant" data-ai-assist-example-url="/ai_assist/exercises/load_ai_assist_exercises" data-correct-option="3" data-id="11814" data-lessons="0" data-solved="" data-word-definitions-url="/word_definitions/quant/fetch_for_exercise?exercise_id=11814" id="example-11814">
<div class="exercise-correctness-bar">
<i class="fas fa-check-circle text-green-2"></i>
<i class="fas fa-times-circle text-red-2"></i>
</div>
<div class="header overflow-visible">
<div class="align-items-xl-center d-flex justify-content-xl-between flex-xl-row justify-content-start align-items-start flex-row tool-box-wrapper gap-3">
<div class="d-flex align-items-center w-100 overflow-hidden">
<h3 class="section-color-2 d-flex align-items-center">
Example 48
</h3>
<div class="tools w-auto shadow-none example-level">
<div class="test-lvl-container">
<span class="test-lvl difficulty with-background fs-14 ms-2 easy">
easy
</span>
</div>
</div>
<div class="line-container section-border-color-4"></div>
</div>
<div class="d-flex position-relative">
<div class="tools gmat">
<div class="tools-inner-wrapper d-flex justify-content-center align-items-center">
<div class="ai-assist-toolbox d-flex">
<div class="ai-toolbox-btn">
<button class="ai-example-assist-btn ai-example fs-13 fw-semibold text-uppercase disabled disabled-state" data-ai-learning-disclaimer-modal-flag="false" data-bs-target="#ai-learning-disclaimer-modal-11814" data-bs-toggle="modal" data-example-id="11814" data-flag-url="/flag/user/first_visit_for_ai_learning_disclaimer_modal/291493/flag" type="button">
<div class="d-flex gap-2 align-items-center">
<img alt="Chat Icon" width="30" height="35" class="ai-asist-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<img alt="Chat Icon" width="30" height="35" class="ai-asist-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon_grey-6ac818542ceac371ecd3a18e8b1da965a482298eff2fd85f1ad82428a1cc1d73.svg">
<div class="fs-13 fw-semibold d-none d-xl-inline d-md-inline">New Example</div>
<span class="fs-13 fw-semibold d-md-none">New Ex</span>
</div>
</button>
<span class="custom-ai-example-tooltip position-absolute text-white p-3 d-none">Once solved, create a new example with AI using this one as a starting point, tailored to the difficulty level you choose.</span>
</div>
<div class="ai-toolbox-btn chat-button">
<button class="ai-example-assist-btn fs-13 ai-tutor-btn fw-semibold" data-tutor-id="ai-tutor-11814">
<div class="assist-btn">
<div class="d-flex gap-2">
<img alt="Chat Icon" width="30" height="35" class="hint-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/hint_icon-55db44b63c2405204c1b2627556dc06a81209dfe5a10ea2866525697bb802af2.svg">
<div class="fs-13 fw-semibold">AI TUTOR</div>
</div>
</div>
</button>
</div>
</div>
<div class="ai-assist-tutor-container d-none ui-draggable" id="ai-tutor-11814">
<div class="ai-assist-tutor-content draggable" data-exercise-id="11814">
<div class="ai-assist-tutor-header d-flex align-items-center ui-draggable-handle">
<span><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/hint_icon-55db44b63c2405204c1b2627556dc06a81209dfe5a10ea2866525697bb802af2.svg"></span>
<h5 class="help-text">Need a Little Help?</h5>
<button aria-label="Close" class="btn-close" type="button"></button>
</div>
<div class="tutor-gradient">
<div class="tutor-body">
<div class="tutor-left">
<div class="tutor-content-icon question-chat-icon">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor-2304921403e286ede9231849dd8659fac282c218431ffff2266cd8b2e33579a0.webp">
</div>
<div class="default-message-wrapper">
<div class="m-0">Hi Joy, do you need a hint for this example?</div>
</div>
</div>
<div class="tutor-btn-chat">
<button class="fw-semibold" id="hint-button" type="button">
Give me a hint
</button>
</div>
</div>
<form class="tutor-footer d-flex align-items-center tutor-form" data-ai-tutor-url="/ai_assist/tutors" data-exercise="11814" data-id="#chat-form-11814" data-img-url="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor-2304921403e286ede9231849dd8659fac282c218431ffff2266cd8b2e33579a0.webp" data-initials="JS" data-section="quant" data-source="">
<input class="form-control chat-tutor-input fs-16" maxlength="2048" placeholder="Write your question here..." rows="1" type="text" data-uw-rm-form="fx" aria-label="Write your question here..." data-uw-hidden-control="hidden-control-element">
<button class="ai-tutor-send-icon d-flex justify-content-center align-items-center" data-bs-placement="top" data-bs-toggle="tooltip" id="send-button" title="" type="submit" data-bs-original-title="Send">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_tutor_send_icon-7810c960045b51dbbb8d8542ea3746a3f5862b2890b8ffdf9801fa8d09a0caf8.svg">
</button>
</form>
</div>
</div>
<div class="resize-handle"></div>

</div>
<a class="activate-whiteboard far fa-tv" data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="Whiteboard" aria-label="Whiteboard"></a>
<div class="flags" data-bs-placement="top" data-bs-toggle="tooltip" title="" data-bs-original-title="Bookmark">
<a class="flag_link " aria-label="Toggle bookmark" href="/flag/example/review/11814"><i class="far fa-bookmark"></i>
<i class="fas fa-bookmark"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="content"><div class="d-inline-block w-100 interrogation_part">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="3dc35923c6c40ae7f27716ed50a101e7"><img alt="" src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/1777/content_pic1.png" style="width:460px"></span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="f4b9ef6cae4b0c4f593f465163ae911a">The tick marks on the number line are equally spaced.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="96fa89183243d7c8fdacacd6817a5730"> If u <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-546-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8840" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8841"><span class="semantics" id="MathJax-Span-8842"><span class="mo" id="MathJax-Span-8843" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-546"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> t = 20, what is the value of z <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-547-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8844" style="width: 0.593em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.593em; height: 0px;"><span style="position: absolute; clip: rect(1.82em, 1000em, 2.139em, -0.407em); top: -2.225em; left: 0.002em;"><span class="mrow" id="MathJax-Span-8845"><span class="semantics" id="MathJax-Span-8846"><span class="mo" id="MathJax-Span-8847" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.23em;"></span></span></span><span style="border-left: 0.002em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.139em; vertical-align: 0.184em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-547"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> y?<br>
&nbsp;</span></p>

</div><div class="answers">
<input class="js-exercise-answer" type="hidden">
<div class="answer">
<label>
<label class="visually-hidden" for="answer-0">Option 0</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-0" name="answer-11814" type="radio" value="0" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="a87ff679a2f3e71d9181a67b7542122c">4</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-1">Option 1</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-1" name="answer-11814" type="radio" value="1" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="c9f0f895fb98ab9159f51fd0297e236d">8</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-2">Option 2</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-2" name="answer-11814" type="radio" value="2" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="d3d9446802a44259755d38e6d163e820">10</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-3">Option 3</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-3" name="answer-11814" type="radio" value="3" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="98f13708210194c475687be6106a3b84">20</span></p>

</span>
</div>
<div class="answer">
<label>
<label class="visually-hidden" for="answer-4">Option 4</label>
<div class="radio-style styledRadio" style="background-image: none; width: 16px; height: 16px; cursor: pointer;"><input class="radio-style" id="answer-4" name="answer-11814" type="radio" value="4" data-uw-rm-form="nfx" style="display: none;"></div>
</label>
<span class="option">
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="f899139df5e1059396431415e770c6dd">100</span></p>

</span>
</div>
</div><a class="btn confirm-answer" data-exercise-id="11814" href="#">Confirm your answer</a><div class="see-solution">
<a href="#"><span class="show-solution">
Show solution
<i class="far fa-chevron-down"></i>
</span>
<span class="hide-solution">
Hide solution
<i class="far fa-chevron-up"></i>
</span>
</a>
</div><div class="info-wrapper">
<div class="info-box solution-wrapper">
<div class="instructors align-items-center">
<span class="presented-by">PRESENTED BY :</span>
<div class="instructor-info d-flex">
<span class="instructor-img ondemand-instructor-image-11814 d-none"><img src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/instructor/image/3/scott.jpg"></span>
<span class="instructor-name ondemand-instructor-name-11814 d-none">Scott Woodbury-Stewart</span>
<span class="instructor-title ondemand-instructor-title-11814 d-none">Founder and Expert GMAT Instructor</span>
<span class="instructor-img screenshare-instructor-image-11814"><img src="https://ttpgmat-production.s3.us-west-2.amazonaws.com/uploads/instructor/image/12/Jeff-profile-picture-no-gradient-600x684.png"></span>
<span class="instructor-name screenshare-instructor-name-11814">Jeff Miller</span>
<span class="instructor-title screenshare-instructor-title-11814">COO &amp; Expert GMAT Instructor</span>
</div>
<span class="blue-dots"><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/grid4x4-49799574016865d51bba173c0201f48fc2fc3dd55400daedca878925a75c417c.svg"></span>
</div>
<div class="info-box-content">
<div class="video-wrapper">
<iframe allowfullscreen="" frameborder="0" mozallowfullscreen="" src="https://player.vimeo.com/video/1033532720" webkitallowfullscreen="" title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
</div>

<p class="solution-title"><span class="notetaking-preselection mathjax-loaded" data-checksum="1042160741aef3c9d183a38372ce7c9e">
<b>Text Solution:</b>
</span></p>
<p><span class="notetaking-preselection mathjax-loaded" data-checksum="b5d17bb890e33b5656f9faa94e91e82a">Since the tick marks are equally spaced, we know that the difference between any two consecutive tick marks is constant.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="89ffe0b6ba2b4b0ea3d58e8407b4c4b4">Since u <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-548-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8848" style="width: 0.566em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.566em; height: 0px;"><span style="position: absolute; clip: rect(1.691em, 1000em, 2.128em, -0.559em); top: -2.184em; left: 0.003em;"><span class="mrow" id="MathJax-Span-8849"><span class="semantics" id="MathJax-Span-8850"><span class="mo" id="MathJax-Span-8851" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span><span style="border-left: 0.003em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.191em; vertical-align: 0.191em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-548"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> t = 20, we know that the distance between any two consecutive tick marks on this number line will be 20.</span><span class="notetaking-preselection mathjax-loaded" data-checksum="915df57d4228fbec8df971c9be29235d"> Thus, the difference between consecutive tick marks y and z is also 20.</span></p>

<p><span class="notetaking-preselection mathjax-loaded" data-checksum="901ae078bbb3018d6217d7198f9d3b65">In other words, z <span class="math-tex-or-mml"><span class="MathJax_Preview"></span><span class="MathJax" id="MathJax-Element-549-Frame" role="textbox" aria-readonly="true"><nobr><span class="math" id="MathJax-Span-8852" style="width: 0.566em; display: inline-block;"><span style="display: inline-block; position: relative; width: 0.566em; height: 0px;"><span style="position: absolute; clip: rect(1.691em, 1000em, 2.128em, -0.559em); top: -2.184em; left: 0.003em;"><span class="mrow" id="MathJax-Span-8853"><span class="semantics" id="MathJax-Span-8854"><span class="mo" id="MathJax-Span-8855" style="font-family: MathJax_Main;">–</span></span></span><span style="display: inline-block; width: 0px; height: 2.191em;"></span></span></span><span style="border-left: 0.003em solid; display: inline-block; overflow: hidden; width: 0px; height: 0.191em; vertical-align: 0.191em;"></span></span></nobr></span><script type="math/mml" id="MathJax-Element-549"><math> <semantics> <mo>–</mo> </semantics> </math></script></span> y = 20.</span></p>

<div class="solution">
Correct answer:
<span class="not-noteable">D</span>
</div>
</div>

</div>
</div></div>





</div>
<div class="modal fade ai-example-generate-modal" data-ai-example-url="/ai_assist/exercises?exercise_id=11814" data-id="ai-example-form" data-remaining-generation="1" id="ai-example-generate-modal-11814" tabindex="-1">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-header position-relative">
<h5 class="modal-title fs-19 fw-semibold">
<img alt="" width="20" height="23" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
&nbsp;AI Example Generator
<span class="beta">BETA</span>
</h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<div class="ai-modal-details fs-16">Our AI will create a new example based on the current one, adjusted to the difficulty level you choose:</div>
<form data-remote="true" class="ai-example-form" action="/ai_assist/exercises?exercise_id=11814" accept-charset="UTF-8" method="post">
<input name="utf8" type="hidden" value="✓" autocomplete="off"><div class="row">
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_0" for="difficulty_0"></label>
<div class="ttp-assist-wrapper ai-card text-center selected" data-difficulty="easy">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_0-385572dac42b0bb762e0935a35f21a36761093dc812c73cb14c3012f837d8c65.svg">
<div class="fs-16 mt-3 mb-0 card-title">Easier</div>
<input value="easy" id="difficulty_0" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_1" for="difficulty_1"></label>
<div class="ttp-assist-wrapper ai-card text-center" data-difficulty="same">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_1-9eb5c556fa9cd806edf2fb7eb3e384f04df0d10d5b65a830561c82c1d869eb6e.svg">
<div class="fs-16 mt-3 mb-0 card-title">Same Difficulty</div>
<input value="same" id="difficulty_1" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<div class="col-md-4 col-12 position-relative">
<label class="card position-absolute" data-difficulty-type="difficulty_2" for="difficulty_2"></label>
<div class="ttp-assist-wrapper ai-card text-center" data-difficulty="hard">
<img alt="" width="80" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/difficulty_example_level_2-cbc1b1a6176bec7b1cb8d820f5fbab65d68e808d5fd3714e6c2d93c6a23051e1.svg">
<div class="fs-16 mt-3 mb-0 card-title">Harder</div>
<input value="hard" id="difficulty_2" autocomplete="off" type="hidden" name="difficulty">
</div>
</div>
<input id="selected_difficulty" name="difficulty" type="hidden" value="easy">
</div>
<div class="text-uppercase fs-13 fw-semibold w-100 text-center generate-text m-0 mb-3">
Generations left: 1
</div>
<div class="modal-footer d-flex justify-content-center border-0">
<button aria-label="Close" class="btn btn-primary cancel-btn fs-14 fw-semibold" data-bs-dismiss="modal" type="button">CANCEL</button>
<button class="btn btn-primary generate-btn fs-14 fw-semibold" type="submit">GENERATE</button>
</div>
<hr class="bg-grey-6">
<div class="fs-13 text-grey-4 text-center">
<img alt="" width="20" height="23" class="" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<span class="ms-2">LLM technology can make mistakes. Check important information.</span>
</div>
</form>
</div>
</div>
</div>
</div>

<div class="modal fade ai-learning-modal" id="ai-learning-disclaimer-modal-11814">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-body">
<div class="d-flex justify-content-end btn-close-head">
<button class="fas btn-close" data-bs-target="#ai-example-generate-modal-11814" data-bs-toggle="modal" type="button"></button>
</div>
<div class="modal-wrapper">
<div class="modal-title fs-24 text-center">
<span>We’re Excited for You to Supercharge Your Learning with</span>
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_ai_logo-8d22d9d46cea8e3902fde5fa0935adb48ae675264d82d6e30015509269d25ae8.svg">
</div>
<div class="modal-details fs-16 text-center">
<span class="fw-bold">TTP AI </span> has <span class="fw-bold">incredible capabilities</span> and <span class="fw-bold">responds impressively</span> to most prompts. However, please keep in mind that AI is still an emerging technology. So, while TTP AI can be used for supplemental practice, on rare occasions, you may find small inaccuracies in AI-generated examples. That’s why your course  <span class="fw-bold">already includes over 4,000 practice questions</span> expertly crafted by our (human) GMAT experts—more than enough to help you crush your score goal. We’ve got you covered!</div>
</div>
<div class="modal-btn d-flex justify-content-center">
<button class="fs-16 fw-semibold text-light" data-bs-target="#ai-example-generate-modal-11814" data-bs-toggle="modal" type="button">OK, GOT IT</button>
</div>
</div>
</div>
</div>
</div>


<section class="modal frequently-asked-question-modal" id="frequently-asked-question-11814">
<div class="modal-dialog modal-dialog-centered modal-xl">
<div class="modal-content">
<div class="col d-flex align-items-center frequently-modal-header">
<span class="question-circle">
<i class="fal fa-question text-white fs-20 fw-semibold"></i>
</span>
<div class="title fs-18 fw-semibold ms-3">Frequently Asked Questions</div>
<button class="align-self-center btn-close text-grey-4 ms-auto" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close modal</span>
</button>
</div>
<div class="modal-body">
<div class="container-auto">
<div class="row">

</div>
</div>
</div>
</div>
</div>
</section>

<div class="d-none render-ai-example" data-exercise-id="11814">
<div class="generating-ai w-100 mb-5">
<div class="d-flex flex-column h-100 align-items-center justify-content-center">
<div class="ai-assist-example-loader">
<lottie-player autoplay="" background="transparent" class="example-loader-element" direction="1" loop="" playmode="normal" speed="1" src="https://lottie.host/36e49cc9-9f39-49fe-989a-9399f7b418fa/wIXgrq4eoj.json"></lottie-player>
</div>
<div class="d-flex align-items-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
<div class="p ai-loader-text fs-24 fw-semibold ms-3">Generating AI Example...</div>
</div>
</div>
</div>

</div>

<div class="lesson-feedback-wrapper">
<div class="lesson-feedback">
<form class="new_lesson_feedback" id="lesson-feedback" action="/lesson_feedbacks" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓" autocomplete="off"><input autocomplete="off" type="hidden" value="2261" name="lesson_feedback[lesson_id]" id="lesson_feedback_lesson_id">
<input autocomplete="off" type="hidden" name="lesson_feedback[score]" id="lesson_feedback_score">
<div class="feedback-header">
<div class="scores-section">
<div class="row">
<div class="col-md-4 col-12 d-flex align-items-center">
<div class="scores">
<h4 class="mb-0">How helpful did you find this lesson?</h4>
</div>
</div>
<div class="col-md-8 col-12">
<div class="scores">
<ul class="list-unstyled m-0 w-100 mt-4 mt-md-0">
<li class="score feedback-score-button mx-auto text-center list-unstyled">
<div>
<a data-value="1" href="#"><img width="20px" class="mx-auto default-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/default/very_unhelpful-5bfce61e9c5851aeeb807c108317de8db81e2640ecbfa12221c2ce878265341f.svg">
<img width="20px" class="mx-auto hover-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/hover/very_unhelpful-4045c1a62a090818f792732214df858328af4f07e4d6d93f80141d06f43199c8.svg">
<h6 class="text-center mt-4">
Very unhelpful
</h6>
</a></div>
</li>
<li class="score feedback-score-button mx-auto text-center list-unstyled">
<div>
<a data-value="2" href="#"><img width="20px" class="mx-auto default-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/default/unhelpful-b11b66beb6028e7985e618fc83a4e576e5476533e7d2eb5b32ba0fbd06090858.svg">
<img width="20px" class="mx-auto hover-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/hover/unhelpful-b666074b5fda283b0789a8a69e3a73a5f4b0eb5aaafddd9149a047c30a360f6d.svg">
<h6 class="text-center mt-4">
Unhelpful
</h6>
</a></div>
</li>
<li class="score feedback-score-button mx-auto text-center list-unstyled">
<div>
<a data-value="3" href="#"><img width="20px" class="mx-auto default-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/default/neutral-e3810c12b53bff155e169375db531ff62675cb259c442afb8cea52569aab9515.svg">
<img width="20px" class="mx-auto hover-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/hover/neutral-456b931e7017841f3b6ae5da27f38f15f3dafcab55824332e40c8d57c5d77cec.svg">
<h6 class="text-center mt-4">
Neutral
</h6>
</a></div>
</li>
<li class="score feedback-score-button mx-auto text-center list-unstyled">
<div>
<a data-value="4" href="#"><img width="20px" class="mx-auto default-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/default/helpful-f67d04b2b00f5c656591a847b48b80dcb4a63f9f78ac34c16a3a52a1b0983d77.svg">
<img width="20px" class="mx-auto hover-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/hover/helpful-970c65b8572e1314c0f23eed5bf53c4e3dac077a21d8ba2fb5b05982eb727d8c.svg">
<h6 class="text-center mt-4">
Helpful
</h6>
</a></div>
</li>
<li class="score feedback-score-button mx-auto text-center list-unstyled">
<div>
<a data-value="5" href="#"><img width="20px" class="mx-auto default-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/default/very_helpful-39a9db72acfc01c6b1bd9ab6923a39dea1a223e662563ee38f5fa59f3cc698db.svg">
<img width="20px" class="mx-auto hover-img" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/lessons/show/smiley/hover/very_helpful-8d1909fdbda04c3c41fde483649545e0d769e14bc6e9d565b39decba21b43a19.svg">
<h6 class="text-center mt-4">
Very Helpful
</h6>
</a></div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="feedback-body hidden">
<h5>Help us personalize this course for you!</h5>
<h6 class="false">
<span class="positive">We can make your learning more efficient the more you provide us with feedback</span>
</h6>
<div class="feedback-comment">
<label class="visually-hidden" for="lesson_feedback_comment">Things you liked, disliked or recommendations for us....</label>
<textarea rows="3" placeholder="Things you liked, disliked or recommendations for us...." name="lesson_feedback[comment]" id="lesson_feedback_comment" data-uw-rm-form="nfx"></textarea>
</div>
<p class="mb-0 text-end mt-2">
<button class="show-overlay btn btn-outline-primary submit-btn" type="submit">Submit</button>
</p>
</div>
</form></div>

</div>
<div class="notes">
</div>
<div class="note-form">
<div class="note" data-color="color-1" data-method="post" data-note-type="text" data-url="/notes">
<div class="header">
New Note
<div class="actions">
<a class="cancel-note" href="#"><i class="far fa-times"></i>
<span class="visually-hidden">Close</span>
</a></div>
</div>
<fieldset>
<div class="colors py-2 border-0">
<span class="me-2 select-a-color">
Select a color:
</span>
<input type="radio" name="note[color]" id="new-note-color-1-2261" value="color-1" class="not-custom" checked="checked" data-uw-rm-form="nfx">
<label data-color="color-1" for="new-note-color-1-2261"><span class="color-1"></span>
<span class="visually-hidden">color-1</span>
</label><input type="radio" name="note[color]" id="new-note-color-2-2261" value="color-2" class="not-custom" data-uw-rm-form="nfx">
<label data-color="color-2" for="new-note-color-2-2261"><span class="color-2"></span>
<span class="visually-hidden">color-2</span>
</label><input type="radio" name="note[color]" id="new-note-color-3-2261" value="color-3" class="not-custom" data-uw-rm-form="nfx">
<label data-color="color-3" for="new-note-color-3-2261"><span class="color-3"></span>
<span class="visually-hidden">color-3</span>
</label><input type="radio" name="note[color]" id="new-note-color-4-2261" value="color-4" class="not-custom" data-uw-rm-form="nfx">
<label data-color="color-4" for="new-note-color-4-2261"><span class="color-4"></span>
<span class="visually-hidden">color-4</span>
</label></div>
<input type="hidden" name="note[noteable_id]" id="note_noteable_id" value="2261" autocomplete="off">
<input type="hidden" name="note[noteable_type]" id="note_noteable_type" value="Lesson" autocomplete="off">
<input type="hidden" name="note[selected_text]" id="note_selected_text" autocomplete="off">
<input type="hidden" name="note[checksum]" id="note_checksum" autocomplete="off">
<input type="hidden" name="note[note_type]" id="note_note_type" value="text" autocomplete="off">
<label class="visually-hidden" for="note_annotation">Type your note here</label>
<textarea name="note[annotation]" id="note_annotation" placeholder="Type your note here" maxlength="600" data-uw-rm-form="nfx"></textarea>
</fieldset>
<div class="submit-box d-md-flex align-items-center justify-content-between">
<div class="counter-container mb-3 mb-md-0">
<span class="characters-counter">0</span>
<span>/600</span>
</div>
<div>
<button class="btn btn-outline-secondary cancel-note">Cancel</button>
<button class="btn ms-1 btn-primary save-note" type="submit">Save</button>
</div>
<span class="resize"></span>
</div>
</div>

</div>
<div class="note-overlay"></div>

</div>
</div>
<div class="container summarize-loader-section d-none" id="summarize-loader-section">
<div class="summarize-loader">
<div class="summary-section">
<h3 class="summarize-loader-title fs-19 fw-semibold">
<div class="fa fa-list me-1"></div>
AI Summary
</h3>
<div class="summary-box d-flex justify-content-center align-items-center flex-column">
<div class="icon-container">
<img alt="Text Icon" class="w-100" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/summary_loader-a7278120db20dccbd96683ccc29be4c8759af5e636180395cc6b0f2580c1c410.gif">
</div>
<div class="summarize-loader-title fs-20 fw-semibold mt-4">
Summarizing lesson...
</div>
</div>
</div>
</div>
</div>

<div id="summarize-result-loader"></div>
<div class="summaries-navigation bg-white py-1 position-absolute bottom-0 w-100">
<div class="container">
<div class="d-flex align-items-center justify-content-between my-4 px-0 flex-md-row flex-column summaries-navigation-row">
<a class="prev-topic me-2 btn btn-outline-section" data-remote="true" href="/lesson/599?chapter_id=586">Previous <span class="hidden-mobile">Lesson</span></a>
<div class="d-flex gap-3 popover-frame">
<div class="popover-wrapper position-relative" id="summarize">
<div class="d-flex justify-content-between summarize-wrap">
<div class="flashcard-btn-wrapper flashcard-menu">
<button name="button" type="submit" class="flashcard-btn btn fs-13  border-0" data-bs-toggle="popover" data-bs-html="true" data-bs-custom-class="custom-popover"><img alt="AI Icon" class="me-2 enabled" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/flash_card_icon-87a03d9ab984f4c40d15e48e92908df51751714af777b73bf76ba4ca0ec2857a.webp">
<img alt="AI Icon" class="me-2 disabled" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/flash_card_disabled_icon-09782a56f4ce86c671b219a4a5ca0cb1e2628fc19b6db984d91e1e11fc3fa90e.webp">
CREATE FLASHCARDS
</button><div id="ai-assist-flashcard-menu">
<div class="flashcard-lesson-modal position-absolute d-none">
<h2 class="flashcard-title fw-semibold mb-0">How many cards do you want to generate?</h2>
<form data-remote="true" id="ai-assist-flashcard-form" action="/ai_assist/flashcards" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" autocomplete="off"><input type="hidden" name="authenticity_token" value="qYZIxW0v4hEq8xlZNxVJkV_yEB--BHghwr72jGe270BEww3J5OZrp-j-e6lrxs1KH7zKophIdr-QuW_K7iMnNg" autocomplete="off"><div class="my-3 row mx-0 options">
<div class="col-4 position-relative m-col card-type">
<label class="card update-form-field-value selected" data-card-type="three" data-field-name="number_of_flashcards" data-form-id="ai-assist-flashcard-form" data-value="3" for="three-card">
<div class="short">
<img alt="Short Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/flashcard/three_card-6dc205b352c50dca426ed9c9e6d027c50f447bf57dcaf4d8027e1e8fe766b7e6.webp">
</div>
<p class="card-title m-0">3 cards</p>
</label>
</div>
<div class="col-4 position-relative m-col card-type">
<label class="card update-form-field-value" data-card-type="five" data-field-name="number_of_flashcards" data-form-id="ai-assist-flashcard-form" data-value="5" for="five-card">
<div class="icon detailed">
<img alt="Detailed Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/flashcard/five_card-d116ffdcc39eaa99e89b3e3d1e63200f48c5ddeeb23c24aca7f76d2cee08ecf3.webp">
</div>
<p class="card-title m-0">5 cards</p>
</label>
</div>
<div class="col-4 position-relative m-col card-type">
<label class="card update-form-field-value" data-card-type="ten" data-field-name="number_of_flashcards" data-form-id="ai-assist-flashcard-form" data-value="10" for="ten-card">
<div class="icon bullet-points">
<img alt="Bullet Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/flashcard/ten_card-2d23939745c6aa58a5764bb0f1123cc72dfd4b6b280e6652717bfd7580530843.webp">
</div>
<p class="card-title m-0">10 cards</p>
</label>
</div>
</div>
<input value="2261" autocomplete="off" type="hidden" name="lesson_id">
<div class="d-block position-relative my-4 mx-3 text-position">
<span class="position-absolute px-2 bg-white text-secondary mt-2">OR</span>
</div>
<div class="form-group my-3 px-2">
<label class="form-label d-block text-start text-color" for="number_of_flashcards">WRITE AN EXACT NUMBER</label>
<input class="form-control" value="3" min="1" max="10" type="number" name="number_of_flashcards" data-uw-rm-form="fx" aria-label="WRITE AN EXACT NUMBER" data-uw-hidden-control="hidden-control-element">
</div>
<button class="create-button text-uppercase text-light mx-auto fs-14">CREATE</button>
</form></div>
</div>

</div>
<div class="summarize-btn-wrapper summarize-menu">
<button name="button" type="submit" class="summarize-btn btn fs-13  border-0" data-bs-toggle="popover" data-bs-html="true" data-bs-custom-class="custom-popover"><img alt="AI Icon" class="me-2 enabled" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/ai_icon-edacec09d0d2001d521cd929bfbbdb80fc429e7d671360c30d15fca5299cfd13.webp">
<img alt="AI Icon" class="me-2 disabled" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/ai_disabled_icon-1bad1033dac6712009fd2ac0da5c8e6573833bd1018f0f8250b9db75b2dddfc4.webp">
Summarize
</button></div>
<div data-ai-assist-summaries-url="/ai_assist/summaries/load_ai_assist_summaries" id="summarize-modal-container">
<div class="summarize-lesson-modal position-absolute d-none" data-summarize-url="/ai_assist/summaries">
<h2 class="summarize-title fw-semibold mb-0">Summarize Lesson with AI</h2>
<form data-remote="true" class="summarize-form" action="/ai_assist/summaries" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" autocomplete="off"><input type="hidden" name="authenticity_token" value="1WburvZY6TwxO_zs-a5vTYaVtF7TjwSYxTY-yFNYqNE4I6uif5FgivM2nhylfeuWxttu4_XDCgaXMaeO2s1gpw" autocomplete="off"><div class="my-3 row mx-0 options">
<div class="col-4 position-relative m-col summary-types">
<label class="card selected" data-summary-type="short" for="summary-short">
<div class="icon short">
<img alt="Short Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/short_summary_icon-99ab0023c0460d48485161fd544d29746d960d172332d3d9d05e385cc12d4436.webp">
</div>
<p class="card-title m-0 mt-1">Short</p>
</label>
</div>
<div class="col-4 position-relative m-col summary-types">
<label class="card" data-summary-type="detailed" for="summary-detailed">
<div class="icon detailed">
<img alt="Detailed Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/detailed_summary_icon-b829023e89ba282305d621989fff3fb346c650bc98ff03b2ecaf39d4fc228af9.webp">
</div>
<p class="card-title m-0 mt-1">Detailed</p>
</label>
</div>
<div class="col-4 position-relative m-col summary-types">
<label class="card" data-summary-type="bullet_points" for="summary-bullet_points">
<div class="icon bullet_points">
<img alt="Bullet points Icon" class="icon-image" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/bullet_points_summary_icon-7e87f0dfb097c0a6126b36df4d1606097f8bc48ce6349569514585983512f65c.webp">
</div>
<p class="card-title m-0 mt-1">Bullet points</p>
</label>
</div>
</div>
<input value="2261" autocomplete="off" type="hidden" name="lesson_id">
<input value="short" id="summary-type" autocomplete="off" type="hidden" name="summary_type">
<button class="generate-button w-75 text-uppercase text-light mx-auto fs-14">Generate</button>
</form></div>

</div>
<a class="next-topic btn btn-section" data-remote="true" href="/lesson/2262?chapter_id=586">Next <span class="hidden-mobile">Lesson</span></a>
</div>
</div>
</div>
<div class="mobile-navigation d-md-none d-flex justify-content-between w-100">
<a class="mobile-prev-topic me-2 btn btn-outline-section" data-remote="true" href="/lesson/599?chapter_id=586">Previous <span class="hidden-mobile">Lesson</span></a>
<a class="mobile-prev-next-topic btn btn-section" data-remote="true" href="/lesson/2262?chapter_id=586">Next <span class="hidden-mobile">Lesson</span></a>
</div>

</div>
</div>
</div>
</div>
<a class="icn-arrow-l text-primary-2" data-remote="true" href="/lesson/599?chapter_id=586"><span>Prev</span>
</a><a class="icn-arrow-r text-primary-2" data-remote="true" href="/lesson/2262?chapter_id=586"><span>Next</span>
</a>
<div id="ai-assist">
<div class="lesson-sidebar-chat-ai position-fixed right-0">
<div class="title-wrapper-header d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center head-wrapper w-100">
<i class="far fa-chevron-right text-grey-2 chat-side-icon-right px-2 me-3 d-flex align-items-center cursor-pointer"></i>
<div class="chat-img">
<img alt="" width="30" height="35" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg" data-uw-rm-alt-original="Chat Icon" role="presentation" data-uw-rm-alt="AR">
</div>
<div class="group-title-head pe-2">
<div class="ttp-smart-assistant fs-18">
TTP SmartAssist
<div class="learn-more-wrapper" data-bs-placement="top" data-bs-toggle="tooltip" title="" data-bs-original-title="Learn more">
<div class="learn_more-img cursor-pointer" data-bs-target="#chat-ai-assist-modal" data-bs-toggle="modal">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/components/ai_assist/learn_more_image-5cff7f63cba707865bf2968141eedbc7573e0198245005cc59804b24a167b215.webp">
</div>
</div>
</div>
<div class="assist-subtitle">
<div class="chat-timer-img">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/components/ai_assist/timer-icon-1a5112b9f75d18b02cf7838300fa986bbf4af8e4fb517ef645f7ff7c953a8911.webp">
</div>
Answers immediately
</div>
</div>
<div class="d-flex align-items-center ms-auto head-right-btn">
<div class="headset cursor-pointer" data-bs-placement="bottom" data-bs-toggle="tooltip" title="" data-bs-original-title="Still have issues? Talk to the TTP Team">
<span class="go-to-intercom" id="go-to-intercom">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/components/ai_assist/intercom_headset-7d3fa265f79b3f0344fee2c2747c0e9e6612153ab0e07a68f90a32a2574cb7c9.webp">
</span>
</div>
<i class="far fa-expand-alt expand-icon" data-bs-target="#chat-resize-modal" data-bs-toggle="modal" type="button"></i>
</div>
</div>
</div>
<div class="chat-content-wrapper position-relative p-3" data-section="quant">
<div class="chat-box mb-5" data-url="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_assistant_logo-5435b490e27a56183d0b75f6d9a89dc5d9ad9f2351b903c566761fd092a71afb.svg">
<div class="chat-content-icon question-chat-icon mb-3">
<img alt="" width="40" height="40" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_assistant_logo-5435b490e27a56183d0b75f6d9a89dc5d9ad9f2351b903c566761fd092a71afb.svg" data-uw-rm-alt-original="Chat Icon" role="presentation" data-uw-rm-alt="AR">
TTP AI Assistant
</div>
<div class="msg-ques-wrapper welcome-chat-message">
<p class="fs-16 text-white m-0"></p>
</div>
</div>
<div class="chat-input-field position-absolute">
<form class="chat-form" data-ai-assist-remaining-messages-url="/ai_assist/remaining_messages" data-ai-assist-url="/ai_assist/chat">
<div class="chat-input-wrapper d-flex align-items-center justify-content-between position-relative">
<textarea class="form-control chat-input overflow-auto fs-16" contenteditable="true" maxlength="2048" placeholder="Ask AI Assist anything" rows="1" type="text" data-uw-rm-form="fx" aria-label="Ask AI Assist anything" data-uw-hidden-control="hidden-control-element"></textarea>
<button class="send-icon" data-bs-placement="top" data-bs-toggle="tooltip" title="" type="submit" data-bs-original-title="Send">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/send_icon-be1609a44c42b5075696d2ac67229600d86d4baa77c2b034bfab3b44c2c75825.svg">
</button>
<button class="stop-btn d-none" data-bs-placement="top" data-bs-toggle="tooltip" title="" type="submit" data-bs-original-title="Stop">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/stop_btn-38c22264bf7af62ad43df46ba46865a9c3cd769cf56f1a5bfaee5b9f44033b56.svg">
</button>
</div>
</form>
</div>
</div>

</div>

<div class="modal fade" id="chat-resize-modal">
<div class="modal-dialog modal-xl">
<div class="modal-content">
<div class="modal-header">
<div class="title-wrapper-header d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center head-wrapper">
<div class="chat-img">
<img alt="Chat Icon" width="30" height="35" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg">
</div>
<div class="ttp-smart-assistant pe-2 ps-2 fs-18 fw-normal">TTP AI Assist</div>
</div>
</div>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body pt-0">
<div class="chat-content-wrapper position-relative p-3" data-section="quant">
<div class="chat-box mb-5" data-url="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_assistant_logo-5435b490e27a56183d0b75f6d9a89dc5d9ad9f2351b903c566761fd092a71afb.svg">
<div class="chat-content-icon question-chat-icon mb-3">
<img alt="Chat Icon" width="40" height="40" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ttp_assistant_logo-5435b490e27a56183d0b75f6d9a89dc5d9ad9f2351b903c566761fd092a71afb.svg">
TTP AI Assistant
</div>
<div class="msg-ques-wrapper welcome-chat-message">
<p class="fs-16 text-white m-0"></p>
</div>
</div>
<div class="chat-input-field position-absolute">
<form class="chat-form" data-ai-assist-remaining-messages-url="/ai_assist/remaining_messages" data-ai-assist-url="/ai_assist/chat">
<div class="chat-input-wrapper d-flex align-items-center justify-content-between position-relative">
<textarea class="form-control chat-input overflow-auto fs-16" contenteditable="true" maxlength="2048" placeholder="Ask AI Assist anything" rows="1" type="text" data-uw-rm-form="fx" aria-label="Ask AI Assist anything" data-uw-hidden-control="hidden-control-element"></textarea>
<button class="send-icon" data-bs-placement="top" data-bs-toggle="tooltip" title="" type="submit" data-bs-original-title="Send">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/send_icon-be1609a44c42b5075696d2ac67229600d86d4baa77c2b034bfab3b44c2c75825.svg">
</button>
<button class="stop-btn d-none" data-bs-placement="top" data-bs-toggle="tooltip" title="" type="submit" data-bs-original-title="Stop">
<img alt="Chat Icon" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/stop_btn-38c22264bf7af62ad43df46ba46865a9c3cd769cf56f1a5bfaee5b9f44033b56.svg">
</button>
</div>
</form>
</div>
</div>

</div>
</div>
</div>
</div>

<div aria-hidden="true" class="modal image-only fade" id="chat-ai-assist-modal" tabindex="-1">
<div class="modal-dialog modal-xl modal-dialog-centered">
<div class="modal-content">
<div class="modal-body p-0">
<div class="d-flex justify-content-end btn-close-head">
<button aria-label="Close" class="fas btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="ttp-assist-wrapper">
<h3 class="modal-title fs-30">
<span>Introducing </span><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_assist_modal_title-cf068357a4441e1a5512286a9b82368a7234c3b38e2c8a14218d4b8431d81647.webp" class="ai-assist-img" alt="TTP AI-Asist"> :<span> Your Personalized AI GMAT Tutor</span>
</h3>
<p class="modal-details fs-18">The next generation of AI is here to help you master the GMAT and maximize your score on test day. TTP AI Assist is <span class="fw-semibold">a revolutionary new tool that replicates the student-tutor experience</span> to guide and support you throughout your GMAT preparation with the TTP course. Prepare faster. Learn more. TTP AI Assist is your personalized GMAT tutor for Quant and Verbal success. (Data Insights coming soon!)</p>
<p class="modal-sub-heading fs-18 fw-semibold">Here are just some of the ways TTP AI Assist provides unparalleled GMAT support throughout your preparation:</p>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">instantly answer your questions</span> about any Quant or Verbal lesson, practice problem, or concept in the TTP course
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">generate an unlimited number of Quant and Verbal practice problems,</span> on-demand quizzes, and practice sets
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">adjust the difficulty level</span> of practice problems to meet your needs
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">conduct interactive learning sessions</span> for active recall and comprehension
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">offer strategies</span> for tackling unfamiliar problem types
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">provide detailed comparisons</span> of different problem-solving approaches
</div>
</div>
<div class="ttp-assist-point fs-18 d-flex gap-2 align-items-baseline">
<img width="15" height="15" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/check_icon-baddf466f23ad1e5ee0a397cd9b8a71460b2169d819847809f0bc8ee6f0dda62.svg">
<div class="ttp-assist-point-number">
<span class="fw-semibold">recommend supplementary lessons</span> to bridge knowledge gaps
</div>
</div>
<div class="ttp-assist-point-content ms-lg-0 ms-4">
<span class="fs-18 assist-download">and so much more.</span>
<span class="download-link">
<a target="_blank" download="true" class="fw-semibold" href="https://targettestprep.s3.us-east-1.amazonaws.com/assets/TTP-AI-Assist-User-Guide-2.pdf">Download a Full List of Use Cases Here</a>
</span>
</div>
</div>
<div class="ttp-assist-mobile-img d-md-none d-block">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/ai_assist_modal_laptop_mob-938764c2fabe53632a55db9d745e7387e0a43c4aad2a27e3342315b704002b6c.png">
</div>
<div class="ai-modal-footer">
<span class="access-title fs-16 text-uppercase fw-semibold d-block">To access TTP AI Assist, follow these 3 simple steps:</span>
<div class="d-flex gap-3 justify-content-between flex-lg-row flex-column">
<div class="steps-content d-flex align-items-lg-center align-items-baseline gap-2 step-1">
<span class="count">1</span>
<span class="footer-detail fs-16">Visit any Quant or Verbal lesson in the <span class="fw-semibold">TTP course.</span></span>
</div>
<div class="steps-content d-flex align-items-lg-center align-items-baseline gap-2 step-2">
<span class="count">2</span>
<span class="footer-detail fs-16">Within the lesson, you’ll see an AI Assist icon on the right. <span class="fw-semibold">Click the icon</span> to launch the TTP AI Assist interface.</span>
</div>
<div class="steps-content d-flex align-items-lg-center align-items-baseline gap-2 step-3">
<span class="count">3</span>
<span class="footer-detail fs-16">The chatbot will appear with a text box below it. Simply type your question into the text box and get instant support!</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="chat-component" data-section="quant">
<div class="chat-modal-container d-flex align-items-center justify-content-evenly">
<i class="far fa-chevron-left text-white chat-side-icon"></i>
<div class="chat-icon-image active d-flex position-relative">
<img alt="Chat Icon" width="28" height="28" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_icon-d5eea3f337f73b1cdebdd4e6463a8078cc57a05040503c9fcaf6c528fddbbf82.webp">
<span class="chat-button-text d-none">Ask Our AI anything</span>
</div>
<i class="fal fa-search chat-search text-white fs-15 d-none"></i>
<span class="chat-bot-title text-white">Ask AI</span>
</div>

</div>
</div>
<div class="lesson-sidebar" style="top: 68.5px;">
<div class="title-wrapper border-bottom border-color-grey-6 justify-content-between d-flex align-items-center">
<h5 class="d-flex align-items-center justify-content-between m-0 fw-semibold fs-18 text-grey-1">
19. Functions and Sequences
</h5>
<i class="far fa-arrow-left close-sidebar text-grey-2"></i>
</div>
<ul class="topics-list m-0 quant">
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2381?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.1</span>
<span class="ms-1">Introduction</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/588?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.2</span>
<span class="ms-1">Function notation</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2385?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.3</span>
<span class="ms-1">The Domain of a Function</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2387?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.4</span>
<span class="ms-1">The Range of a Function</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2382?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.5</span>
<span class="ms-1">Using Minimum and Maximum Values to Determine the Range of a Function</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/590?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.6</span>
<span class="ms-1">Compound functions</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/591?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.7</span>
<span class="ms-1">Graphs of functions</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2252?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.8</span>
<span class="ms-1">Maximum and Minimum Values of a Quadratic Function</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2253?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.9</span>
<span class="ms-1">Word Problems with Maximum and Minimum Values of a Quadratic Function</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/593?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.10</span>
<span class="ms-1">From f(x) to f(anything)</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/594?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.11</span>
<span class="ms-1">Symbolism</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed with-sub-chapters">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2363?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.12</span>
<span class="ms-1">Algorithms</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
<ul class="sub-topics-list p-0">
<li class="sub-topic list-unstyled section-bg-color-4-hover rounded-3 completed examples-not-completed">
<div class="d-flex sub-topic-content-wrapper js-wrapper">
<i class="me-2 mt-1 status fa-exclamation-circle fal"></i>
<a data-remote="true" class="flex-grow-1 pe-3 fw-normal fs-14 show-overlay" href="/lesson/2364?chapter_id=586&amp;sidebar=true">Answering Questions about an Algorithm’s Net Effect</a>
<div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
</ul>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/595?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.13</span>
<span class="ms-1">Word problems involving functions</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2182?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.14</span>
<span class="ms-1">Testing Properties of Functions by Testing Numbers</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2168?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.15</span>
<span class="ms-1">Functions and Properties of Numbers</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/596?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.16</span>
<span class="ms-1">Sequences</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/597?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.17</span>
<span class="ms-1">Recursive notation</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/598?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.18</span>
<span class="ms-1">Arithmetic sequences</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed">
<div class="bar filled"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/599?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.19</span>
<span class="ms-1">Sum of the terms of an arithmetic sequence</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled examples-not-completed current-topic with-sub-chapters">
<div class="bar"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper bg-grey-8">
<i class="status fa-exclamation-circle fal"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2261?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 section-color-1">
<span>19.20</span>
<span class="ms-1">Equally Spaced Tick Marks</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
<ul class="sub-topics-list p-0">
<li class="sub-topic list-unstyled section-bg-color-4-hover rounded-3">
<div class="d-flex sub-topic-content-wrapper js-wrapper">
<i class="me-2 mt-1 status"></i>
<a data-remote="true" class="flex-grow-1 pe-3 fw-normal fs-14 show-overlay" href="/lesson/2262?chapter_id=586&amp;sidebar=true">Tick Mark Questions When We Are Not Given Consecutive Values</a>
<div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="sub-topic list-unstyled section-bg-color-4-hover rounded-3">
<div class="d-flex sub-topic-content-wrapper js-wrapper">
<i class="me-2 mt-1 status"></i>
<a data-remote="true" class="flex-grow-1 pe-3 fw-normal fs-14 show-overlay" href="/lesson/2263?chapter_id=586&amp;sidebar=true">Equally Spaced Number Lines with Exponents</a>
<div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
</ul>
</li>
<li class="topic list-unstyled">
<div class="bar"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/600?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 text-grey-3">
<span>19.21</span>
<span class="ms-1">Geometric sequence</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled">
<div class="bar"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2273?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 text-grey-3">
<span>19.22</span>
<span class="ms-1">Repeating Sequences  </span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="topic list-unstyled with-sub-chapters">
<div class="bar"></div>
<div class="d-flex justify-content-between topic-content-wrapper section-bg-color-4-hover rounded-3 js-wrapper">
<i class="status"></i>
<a data-remote="true" class="w-100 pe-3 show-overlay" href="/lesson/2266?chapter_id=586&amp;sidebar=true"><h6 class="fw-semibold m-0 text-grey-3">
<span>19.23</span>
<span class="ms-1">Canceling Terms in a Sequence</span>
</h6>
</a><div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
<ul class="sub-topics-list p-0">
<li class="sub-topic list-unstyled section-bg-color-4-hover rounded-3">
<div class="d-flex sub-topic-content-wrapper js-wrapper">
<i class="me-2 mt-1 status"></i>
<a data-remote="true" class="flex-grow-1 pe-3 fw-normal fs-14 show-overlay" href="/lesson/2267?chapter_id=586&amp;sidebar=true">Finding the sum of a set of consecutive terms in the sequence</a>
<div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
<li class="sub-topic list-unstyled section-bg-color-4-hover rounded-3">
<div class="d-flex sub-topic-content-wrapper js-wrapper">
<i class="me-2 mt-1 status"></i>
<a data-remote="true" class="flex-grow-1 pe-3 fw-normal fs-14 show-overlay" href="/lesson/2268?chapter_id=586&amp;sidebar=true">Finding the product of a set of consecutive terms in a sequence</a>
<div class="bookmark d-none">
<i class="fas fa-bookmark"></i>
</div>
</div>
</li>
</ul>
</li>
</ul>

</div>
<div aria-hidden="true" class="modal fade" id="reference-guide-modal" tabindex="-1">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">
Reference Guide
</h5>
<button aria-label="Close" class="fas btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<div class="equations hidden-mobile">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/sat/equations-c5b41784a4f21dd982bd2e8e6c70570cde6270601f4afa227a2ea3b582480284.svg">
</div>
<div class="mobile-equations visible-mobile">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/sat/mobile_equations-cb0ea64db3c21e52fdaf252132ae852b672e983132b824632608b14eab7044e8.svg">
</div>
</div>
</div>
</div>
</div>
<div aria-hidden="true" class="modal fade" id="coordinate-geometry-modal" tabindex="-1">
<div class="modal-dialog modal-lg form-modal modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title"></h5>
<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="modal-body">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/ondemand/shared/coordinate_geometry-4a29b5400db3461fb351c4dc3be161493b7f1f1668fe88e4427b2fc78f7fe123.png">
<div class="coordinate-title">
Coordinate Geometry is Currently Tested on the GMAT
</div>
<div class="updated-time-wrapper">
<div class="updated-time text-blue-3 fw-semibold fs-13">
<span>
Updated on: Jul 2025
</span>
</div>
</div>
<div class="coordinate-subtitle">
<p>
  While most geometrical concepts were removed from the GMAT Focus Edition, which GMAC now refers to simply as "the GMAT" once again, Coordinate Geometry is still tested.
</p>
<p>
  In addition, some basic geometry concepts, including calculating the area and perimeter of shapes like squares, triangles, and circles, are still tested on the current GMAT. However, whenever a geometry formula outside of coordinate geometry is required, it will be provided in the question stem.
</p>

</div>
</div>
<div class="modal-footer">
<button class="btn btn-primary text-center" data-bs-dismiss="modal" type="button">
OKAY, GOT IT!
</button>
</div>
</div>
</div>
</div>

<div class="chat-feedback-modals"></div>
<form class="submit-on-ready" action="/ai_assist/summaries/load_ai_assist_summaries?lesson_id=2261" accept-charset="UTF-8" data-remote="true" method="get"><input name="utf8" type="hidden" value="✓" autocomplete="off">

<div class="custom-intercom-button" id="custom-intercom-button">
<span class="custom-message-icon">
<svg fill="currentColor" height="24" viewBox="0 0 28 32" width="21" xmlns="http://www.w3.org/2000/svg">
<path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
</svg>
</span>
<span class="custom-up-arrow d-none">
<svg fill="none" height="24" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" fill-rule="evenodd" fill="white"></path>
</svg>
</span>
</div>


</form></div>
</section>
<div class="modal wide" data-bs-backdrop="static" id="ai-assist-flashcard-modal">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content"></div>
</div>
</div>

<div class="modal wide" data-bs-backdrop="static" id="ai-assist-flashcard-loader-modal">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="flashcard-loader">
<div class="flashcard-section h-100">
<div class="p-3 w-100 justify-content-between d-flex">
<h3 class="flashcard-loader-title fs-19 fw-semibold">
<img alt="AI Icon" class="me-1" src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/ai_assist/summary/flash_card_icon-87a03d9ab984f4c40d15e48e92908df51751714af777b73bf76ba4ca0ec2857a.webp">
AI Flashcards
</h3>
<button class="btn-close" data-bs-dismiss="modal" type="button"></button>
</div>
<div class="loader-box d-flex justify-content-center align-items-center flex-column">
<div class="icon-container ai-flashcard-loader-container">
<lottie-player autoplay="" background="transparent" direction="1" loop="" playmode="normal" speed="1" src="https://lottie.host/aa4a6e6a-2fbb-4ff2-8950-bcf21c3a2350/dPUjiqtkrY.json"></lottie-player>
</div>
<div class="flashcard-loader-title fs-20 fw-semibold">
Creating your flashcards....
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>





















<div class="d-none" id="intercom-custom-modal" role="dialog" tabindex="-1">
<div class="intercom-main-box">
<div class="intercom-header-block">
<div class="intercom-header text-center">
<span>
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/components/open_chat_ai/chat_header_icon-9f454b04dd5990723efa83eb469acd853bde8fd76eac9459113e1ae0c54e8952.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG">
</span>
<h5 class="assist-text fw-semibold fs-28" role="heading" aria-level="4" data-uw-rm-heading="level">TTP Assistant</h5>
<h5 class="text fs-28 fw-semibold">What can we do for you?</h5>
<button aria-label="Close" class="btn-close" type="button"></button>
</div>
<div class="content-box cursor-pointer">
<div class="content-option d-flex align-items-center">
<div class="content-option-text">
<div class="title fs-16 fw-semibold">
I have a content-related question
about a lesson, test, practice
question, or example.
</div>
<div class="subtitle fs-16">
Get instant help
</div>
</div>
<button class="intercom-button" data-bs-placement="top" data-bs-toggle="tooltip" title="" type="submit" data-bs-original-title="Send">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/components/ai_assist/send_button-92dc5e33ef00bebe501cf6b7fb1c8b052bb3358119d9a2526043dc4854646180.webp" data-uw-rm-alt-original="" alt="A simple blue arrow pointing to the right." data-uw-rm-alt="BE">
</button>
</div>
</div>
</div>
<div class="other-questions">
<p class="other-questions-text fs-16 text-center">Have other questions? We usually reply in 1–2 hours</p>
</div>
<div class="talk-team fs-16 fw-bold text-center">
<span class="cursor-pointer intercom-talk-to-ttp go-to-intercom intercom-modal-ttp-team" id="go-to-intercom">
<span class="text-decoration-underline">
Talk to the TTP Team
</span>
</span>
</div>
</div>
</div>

<div class="draggable-ttp" id="whiteboard-container">
<div class="draggable-area header">
<a class="close-whiteboard" href="#" data-uw-rm-brl="PR" data-uw-original-href="#">x</a>
</div>
<div id="whiteboard"></div>
<div class="whiteboard-footer flex-container flex-align-center flex-justify-center">
<span>* Don’t use the whiteboard during the learning phase of TTP. Only use it during the practice test phase. Your goal is to master the material. You'll be better able to do this with a pen or a pencil. Once you master the material, you can get used to the whiteboard during your six practice tests.</span>
<span class="br-resize resizer"></span>
<span class="bl-resize resizer"></span>
<span class="tl-resize resizer"></span>
<span class="tr-resize resizer"></span>
</div>
<div class="bottom-resizable resizer"></div>
<div class="right-resizable resizer"></div>
<div class="top-resizable resizer"></div>
<div class="left-resizable resizer"></div>
</div>
<script src="https://d2c3i42f9kiq5f.cloudfront.net/assets/react-with-addons-0.14.3.min-1675a05280f31ac4b615d623b3ae6e9faff18cb4839eb89f860e635802dfbda0.js"></script>
<script src="https://d2c3i42f9kiq5f.cloudfront.net/assets/literallycanvas.min-c5441e953316e6abbb512ffbdcf9fabf3b4a1d3916cc6caa87678520b54122d1.js"></script>


<div class="modal" id="confirmation-modal">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body text-center">
<p><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/trash_can-1b5053c118640756683ba26d06e6e9ab0fd2e3030f44efabe55cc5ed277a4142.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG"></p>
<p class="message mt-4 mb-0 fs-18"></p>
</div>
<div class="modal-footer justify-content-center border-top-0 pb-4 mb-3">
<button class="btn btn-outline-secondary me-md-3" data-bs-dismiss="modal" type="button">
Cancel
</button>
<button class="btn btn-primary confirm" type="button">
Delete
</button>
</div>
</div>
</div>
</div>
<div class="modal" id="note-guide">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">How to Use the “Target Notes” Note-taking Feature</h5>
<button class="btn-close" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body">
<p>You can take personalized notes in the TTP GMAT Course!</p>
<p class="numbered"><strong>1</strong> Just go to any lesson or problem in the course, and use the left mouse button to highlight a section of text. You'll see the “Target Notes” feature open.</p>
<p class="numbered"><strong>2</strong> You can choose any of four highlight colors, and you can enlarge the Target Notes box. Then enter any notes you need. To save the note, simply click save.</p>
<p class="numbered"><strong>3</strong> All of your notes will be stored under the "bookmarks" tab.</p>
<p class="numbered"><strong>4</strong> To see your notes, click on a chapter.</p>
<p class="numbered-last"><strong>5</strong> Then - you can click on the note to be taken to it.</p>
<p>If you have any trouble using it or have any questions, please email me right away: <strong>scottwoodburystewart@targettestprep.com</strong></p>

</div>
</div>
</div>
</div>
<div class="modal" id="upgrade-to-unlock">
<div class="modal-dialog modal-dialog-centered modal-lg">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close pe-3 pt-3 text-grey-4 fw-bold" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body p-0 px-5 text-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/evaluations/index/crush_gmat-27af026fbb1d61964430103bb2bfedd51b38f9d486fbdc700682729b98824386.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG">
<h3 class="mt-4 mb-0">
Ready to crush the test?
</h3>
<p class="pt-3 pb-2 text-grey-2">
Upgrade today to unlock the full power of the TTP Quant + Verbal Course: 500+ lessons, 4000+ practice problems, 800+ HD Solutions, live support
</p>
<a class="btn btn-primary mb-5" href="/subscriptions/new" data-uw-rm-brl="PR" data-uw-original-href="/subscriptions/new">Upgrade now</a>
</div>
</div>
</div>
</div>
<div class="modal" id="select-time-per-question">
<div class="modal-dialog modal-dialog-centered modal-sm">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body text-center">
<p><img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/time-906f2b3e08f8d79ac6b256e7637bb623bbea539a9f1cb844379a8aab05353cc3.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG"></p>
<div class="default">
<h5 role="heading" aria-level="4" data-uw-rm-heading="level">Select time per question</h5>
<select name="time_per_question" id="time_per_question" class="select-time form-select" aria-label="Time per Question" data-uw-rm-form="nfx"><option value="60">1:00 minute</option>
<option value="75">1:15 minutes</option>
<option value="90">1:30 minutes</option>
<option value="105">1:45 minutes</option>
<option selected="selected" value="120">2:00 minutes</option>
<option value="135">2:15 minutes</option>
<option value="150">2:30 minutes</option>
<option value="165">2:45 minutes</option>
<option value="180">3:00 minutes</option>
<option value="195">3:15 minutes</option>
<option value="210">3:30 minutes</option>
<option value="225">3:45 minutes</option>
<option value="240">4:00 minutes</option>
<option value="255">4:15 minutes</option>
<option value="270">4:30 minutes</option>
<option value="285">4:45 minutes</option>
<option value="300">5:00 minutes</option></select>
</div>
<div class="hard-chapter-test d-none">
<h3>About  Hard Tests</h3>
<div class="bg-light-2 description text-grey-2 text-start">
<p>The  questions in this Hard Chapter Test are as difficult as any that appear on the GMAT. So, at this stage of your preparation, it does not make sense to seek answer them in under two minutes.</p><p>Rather, for best results, you should hide the timer and answer these questions untimed, taking as much time as you need to fully understand and analyze each question.</p><p>By practicing in this way, you will give yourself time to learn to see what’s going on in the questions and to learn to work your way to correct answers to difficult  questions.</p>
</div>
<div class="row select-time-row">
<div class="col-lg-4 col-12 p-0">
<h5 role="heading" aria-level="4" data-uw-rm-heading="level">Select time per question</h5>
</div>
<div class="col-lg-8 col-12 p-0">
<select name="time_per_question" id="time_per_question" class="select-time form-select" aria-label="Time per Question" data-uw-rm-form="nfx"><option value="60">1:00 minute</option>
<option value="75">1:15 minutes</option>
<option value="90">1:30 minutes</option>
<option value="105">1:45 minutes</option>
<option selected="selected" value="120">2:00 minutes</option>
<option value="135">2:15 minutes</option>
<option value="150">2:30 minutes</option>
<option value="165">2:45 minutes</option>
<option value="180">3:00 minutes</option>
<option value="195">3:15 minutes</option>
<option value="210">3:30 minutes</option>
<option value="225">3:45 minutes</option>
<option value="240">4:00 minutes</option>
<option value="255">4:15 minutes</option>
<option value="270">4:30 minutes</option>
<option value="285">4:45 minutes</option>
<option value="300">5:00 minutes</option></select>
</div>
</div>
</div>
</div>
<div class="modal-footer justify-content-center border-top-0">
<div class="default">
<a class="btn btn-outline-primary" id="time-per-question-modal-button" disable_with="Please wait..." href="#" data-uw-rm-brl="PR" data-uw-original-href="#">Start Test</a>
</div>
<div class="hard-chapter-test d-none">
<a class="btn btn-primary" id="time-per-question-modal-button" disable_with="Please wait..." href="#" data-uw-rm-brl="PR" data-uw-original-href="#">Start Test</a>
</div>
</div>
</div>
</div>
</div>
<div class="modal" data-bs-backdrop="static" data-bs-focus="true" data-bs-keyboard="false" id="pause-test-time">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close pe-3 pt-3 text-grey-4 fw-bold" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body p-0 px-5 text-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/problem_solving/test_paused-74fec24fdb8ffc7138b95aa12cc91976b47dd858b2cbc7d4c28760c41ae6f382.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG">
<h3 class="mt-4 mb-0">Test Paused</h3>
<a class="btn btn-primary resume" href="#" data-uw-rm-brl="PR" data-uw-original-href="#">Resume</a>
</div>
</div>
</div>
</div>
<div class="modal" data-bs-backdrop="static" data-bs-focus="true" data-bs-keyboard="false" id="exit-test">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close pe-3 pt-3 text-grey-4 fw-bold" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body p-0 px-5 text-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/problem_solving/exit_test-da6a9a0288ad4ba036597eaeed3ddd572bea2f25d3659d864a8de451ba52358a.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG">
<h3 class="mt-4 mb-0">Your progress will be saved</h3>
<p class="pt-2 text-grey-2">
You may resume this session at any time. To resume, click "Chapter Tests" in the top navigation bar. If you created a custom practice session, click "Custom Tests" to find and resume this session.
</p>
<a id="exit-btn" class="btn btn-primary exit show-overlay" href="#" data-uw-rm-brl="PR" data-uw-original-href="#">exit</a>
</div>
</div>
</div>
</div>
<div class="modal" id="retake-test">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-bottom-0">
<button class="btn-close pe-3 pt-3 text-grey-4 fw-bold" data-bs-dismiss="modal" type="button">
<span class="visually-hidden">Close</span>
</button>
</div>
<div class="modal-body p-0 px-5 text-center">
<img src="https://d2c3i42f9kiq5f.cloudfront.net/assets/layout/controllers/evaluations/index/retake_test-e355a7eec614f833177fe35101b7183cde23247bf143363f3186a4e2f7e38eb7.svg" data-uw-rm-alt-original="" role="presentation" alt="" data-uw-rm-alt="SVG">
<h3 class="mt-4 mb-0">Are you sure?</h3>
<p class="pt-2 text-grey-2 fs-18">
If you retake this test, your previous results will be overwritten.
</p>
</div>
<div class="modal-footer justify-content-center border-top-0 pb-4 mb-3">
<a class="btn btn-outline-secondary me-md-3" data-bs-dismiss="modal" type="button">
Cancel
</a>
<a class="btn btn-primary" data-bs-target="#select-time-per-question" data-bs-toggle="modal" id="start-test-modal-button" type="button">
Start Test
</a>
</div>
</div>
</div>
</div>

<div class="col-12 col-sm-offset-4 col-sm-5 col-md-offset-5 col-md-4 ui-draggable" data-type="ti_108" id="calculator" style="display: none;">
<div class="header d-flex ui-draggable-handle">
<div class="title">Calculator</div>
<i class="fa fa-times-circle cross-icon"></i>
</div>
<div class="memory-indicator">
<span class="form-control text-center" id="memory-negative-error">
<span class="gray" id="memory-indicator">M</span>
<span class="gray" id="negative-indicator">—</span>
<span class="gray" id="error-indicator">E</span>
</span>
<label class="visually-hidden" for="display">Display Input</label>
<input autofocus="" class="form-control text-right" disabled="disabled" id="display" placeholder="0.0000000" type="text" data-uw-rm-form="nfx">
</div>
<div class="row ms-1">
<div class="solar-panel col-1"></div>
<div class="solar-panel col-1"></div>
<div class="solar-panel col-1"></div>
<div class="solar-panel col-1"></div>
</div>
<div class="bottom-line col-12 my-1 mt-3"></div>
<div id="buttons">
<button class="btn btn-danger">+/-</button>
<button class="btn btn-danger">√</button>
<button class="btn btn-danger">%</button>
<button class="btn btn-danger">÷</button>
<button class="btn btn-danger" id="mrc-button">MRC</button>
<button class="btn btn-danger">M-</button>
<button class="btn btn-danger">M+</button>
<button class="btn btn-danger">×</button>
<button class="btn btn-default">7</button>
<button class="btn btn-default">8</button>
<button class="btn btn-default">9</button>
<button class="btn btn-danger">-</button>
<button class="btn btn-default">4</button>
<button class="btn btn-default">5</button>
<button class="btn btn-default">6</button>
<button class="btn btn-danger">+</button>
<button class="btn btn-default">1</button>
<button class="btn btn-default">2</button>
<button class="btn btn-default">3</button>
<button class="btn btn-danger" id="equals-key">=</button>
<br>
<button class="btn btn-danger" id="on-button">ON/C</button>
<button class="btn btn-default text-center">0</button>
<button class="btn btn-default text-center">.</button>
</div>
</div>"""

print(ask(prompt,"lesson"))




