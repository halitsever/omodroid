<script setup lang="ts">
import { withBase } from "vitepress";
import TitleBlock from "./TitleBlock.vue";
import { repoUrl } from "./sheet";

const contents = [
  { path: "Readme.md", note: "Project summary and current status, with a Turkish section for owners" },
  { path: "LICENSE", note: "MIT License" },
  { path: "AGENTS.md", note: "The CI check and the conventions for contributors" },
  { path: "llms.txt", note: "A short project summary for language models" },
  { path: ".github/CONTRIBUTING.md", note: "How to report bugs, suggest features and send pull requests" },
  { path: ".github/ISSUE_TEMPLATE/", note: "Bug report and feature request templates" },
  { path: ".github/workflows/ci.yml", note: "One check: Prettier formatting" },
  { path: "docs/", note: "This website" },
];
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Omodroid: a planned Android launcher for the Omoda 5 head unit</h1>
      <p class="lede">
        Omodroid is an open source project to build an Android launcher and overlay for the Omoda 5 (2023) infotainment head unit. It is at an early stage. The repository holds no
        source code, no release and no install steps.
      </p>
      <div class="actions">
        <a class="btn primary" :href="repoUrl">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.22 1.88.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.28.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"
            />
          </svg>
          Watch the repository
        </a>
        <a class="btn" :href="withBase('/status')">Read the project status</a>
      </div>
    </div>

    <figure class="drawing">
      <div class="plate">
        <div class="dim dim-w" aria-hidden="true"><span>width: not documented</span></div>
        <div class="dim dim-h" aria-hidden="true"><span>height: not documented</span></div>
        <div class="screen">
          <div class="region region-a">
            <span class="key">A</span>
            <span class="name">Launcher</span>
            <span class="state">planned</span>
          </div>
          <div class="region region-b">
            <span class="key">B</span>
            <span class="name">Overlay</span>
            <span class="state">planned</span>
          </div>
        </div>
      </div>
      <figcaption>
        Diagram only, not a screenshot or a design. The two regions are the two parts the README names. Their size and position mean nothing, and the screen outline is not to
        scale.
      </figcaption>
    </figure>
  </section>

  <TitleBlock :sheet="1" />

  <div class="body">
    <section>
      <h2>What is in the repository today</h2>
      <p>Documentation, a license and one CI check. The main files are listed below.</p>
      <table class="bom">
        <thead>
          <tr>
            <th scope="col">Path</th>
            <th scope="col">What it is</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in contents" :key="row.path">
            <td>
              <code>{{ row.path }}</code>
            </td>
            <td>{{ row.note }}</td>
          </tr>
          <tr class="missing">
            <td>Source code</td>
            <td>None yet</td>
          </tr>
          <tr class="missing">
            <td>Releases</td>
            <td>None yet</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>What is planned</h2>
      <p>
        The README describes the goal in one line: an Android launcher and overlay for the Omoda 5 (2023) infotainment head unit. The project is meant for owners who want to
        customize that screen.
      </p>
      <p>
        That sentence is the full published plan. Install steps are planned to arrive together with the first build. The project has not published a roadmap, a feature list or a
        release date, so this site does not show any.
      </p>
      <p>
        If you are new to the category, the explainer on <a :href="withBase('/android-car-launcher')">what an Android car launcher is</a> covers launchers and overlays on Android
        head units in general terms.
      </p>
      <p>
        The <a :href="withBase('/omoda-5-launcher')">Omoda 5 launcher page</a> collects what Chery's documents say about the screen, and the
        <a :href="withBase('/blog/')">blog</a> has background notes on Android Auto, head units and CAN bus wiring.
      </p>
    </section>

    <section>
      <h2>What this site cannot tell you yet</h2>
      <p>Some questions have no answer until code exists. The site leaves them open on purpose.</p>
      <ul>
        <li>Which features the launcher will have. None are published.</li>
        <li>Which head unit software versions it will work with. Nothing has been built or tested.</li>
        <li>How to install it. There is nothing to install.</li>
        <li>What the car's head unit runs. The repository does not document the system, and this site does not guess.</li>
      </ul>
      <p>You cannot use Omodroid to put apps on the head unit today.</p>
    </section>

    <section>
      <h2>Follow the project</h2>
      <p>
        The README asks for one thing at this stage: watch or star the <a :href="repoUrl">repository</a> to follow the first release. Questions and ideas go to the
        <a :href="repoUrl + '/issues'">issue tracker</a>.
      </p>
      <p>The <a :href="withBase('/status')">project status page</a> explains how to get release notifications, how to open a useful issue and how to send a pull request.</p>
      <p lang="tr">Türkçe okuyanlar için: README'de Omoda 5 sahiplerine yönelik kısa bir Türkçe bölüm var. Proje erken aşamada ve henüz indirilecek bir sürüm yok.</p>
    </section>

    <section class="disclaimer">
      <h2>Not affiliated with Chery or Omoda</h2>
      <p>
        Omodroid is an independent open source project by Halit Sever. It is not affiliated with, endorsed by or sponsored by Chery or Omoda. The model name is used only to say
        which head unit the project is for.
      </p>
    </section>
  </div>
</template>
