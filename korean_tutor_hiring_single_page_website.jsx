<script src="https://cdn.tailwindcss.com"></script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Korean Tutor Hiring</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
  <!-- Header -->
  <header class="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-2 group">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" class="fill-rose-500/90" />
          <path d="M7 12h10M12 7v10" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span class="font-semibold text-slate-900 group-hover:text-rose-600 transition">K-Tutor Careers</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="#roles" class="hover:text-rose-600">Open Roles</a>
        <a href="#apply" class="hover:text-rose-600">Apply</a>
        <a href="#faq" class="hover:text-rose-600">FAQ</a>
      </nav>
      <a href="#apply" class="inline-flex items-center rounded-2xl bg-rose-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-rose-700">Apply Now</a>
    </div>
  </header>

  <!-- Hero -->
  <section id="home" class="pt-14 md:pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <div class="space-y-6">
        <span class="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
          We’re Hiring • Korean Tutors
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Share your love for the <span class="text-rose-600">Korean language</span>.
        </h1>
        <p class="text-lg text-slate-600">
          Join our growing tutor network and help learners reach their Korean goals. Flexible hours, fair pay, and real impact.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#apply" class="inline-flex items-center gap-2 rounded-2xl bg-rose-600 text-white px-5 py-3 font-medium shadow hover:bg-rose-700">
            Start Application
          </a>
          <a href="#roles" class="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-medium hover:border-slate-400">
            See Roles
          </a>
        </div>
        <ul class="mt-4 text-sm text-slate-600 space-y-2">
          <li>• On-site role available in <span class="font-semibold">Covington, Georgia</span> (home-visit, 2×/week)</li>
          <li>• Options for online/remote sessions</li>
          <li>• Competitive per-session pay + incentives</li>
        </ul>
      </div>
      <div class="relative">
        <div class="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-rose-100 via-white to-sky-100 shadow-sm border border-slate-200 p-6">
          <div class="h-full w-full rounded-2xl border border-dashed border-slate-300 grid place-items-center text-center">
            <div>
              <p class="text-2xl font-semibold">Teach Hangul. Change lives.</p>
              <p class="mt-2 text-slate-600">Beginner • TOPIK • Conversation • Business Korean</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Open Roles -->
  <section id="roles" class="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Open Roles</h2>
    <div class="grid lg:grid-cols-2 gap-4">
      <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">Korean Tutor (Home Visit, 2×/week)</h3>
        <p class="text-sm text-slate-600">Covington, Georgia, USA • Part-time · On-site</p>
        <p class="mt-3 text-slate-700">Teach beginner to intermediate learners at a client's home in Covington, GA. Sessions twice weekly (1.5–2 hours each).</p>
        <ul class="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
          <li>Fluent in Korean; comfortable teaching Hangul and conversation</li>
          <li>Basic English communication skills</li>
          <li>Prior tutoring/teaching experience preferred</li>
          <li>Can commute to Covington and conduct home visits</li>
          <li>Professional, punctual, and friendly</li>
        </ul>
      </article>
      <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 class="text-lg font-semibold text-slate-900">Korean Tutor (Online)</h3>
        <p class="text-sm text-slate-600">Remote • Contract · Flexible</p>
        <p class="mt-3 text-slate-700">Conduct 1:1 or small-group online lessons for global learners using Zoom/Google Meet.</p>
        <ul class="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
          <li>Strong command of Korean (native or near-native)</li>
          <li>Stable internet and quiet teaching space</li>
          <li>Familiarity with digital whiteboards and screen sharing</li>
        </ul>
      </article>
    </div>
  </section>

  <!-- Application Form -->
  <section id="apply" class="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl md:text-3xl font-bold">Tutor Application</h2>
      <form class="mt-6 grid grid-cols-1 gap-4">
        <input type="text" placeholder="Full Name" class="rounded-xl border px-3 py-2" required />
        <input type="email" placeholder="Email" class="rounded-xl border px-3 py-2" required />
        <input type="tel" placeholder="Phone" class="rounded-xl border px-3 py-2" required />
        <input type="text" placeholder="Location/Time Zone" class="rounded-xl border px-3 py-2" />
        <select class="rounded-xl border px-3 py-2">
          <option>Korean Tutor (Home Visit, Covington GA)</option>
          <option>Korean Tutor (Online)</option>
          <option>Both / Either</option>
        </select>
        <textarea rows="4" placeholder="Experience / Certifications (optional)" class="rounded-xl border px-3 py-2"></textarea>
        <button type="submit" class="rounded-2xl bg-rose-600 text-white px-5 py-3 font-medium shadow hover:bg-rose-700">Submit Application</button>
      </form>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl md:text-3xl font-bold">FAQ</h2>
    <div class="mt-4 grid md:grid-cols-2 gap-4">
      <details class="rounded-2xl border border-slate-200 bg-white p-4">
        <summary class="font-medium cursor-pointer">Who can apply?</summary>
        <p class="mt-2 text-sm">Fluent or native Korean speakers with a passion for teaching. Experience is a plus.</p>
      </details>
      <details class="rounded-2xl border border-slate-200 bg-white p-4">
        <summary class="font-medium cursor-pointer">How are tutors paid?</summary>
        <p class="mt-2 text-sm">Per-session rates depending on experience and lesson type. Bonuses for good feedback.</p>
      </details>
    </div>
  </section>

  <!-- Footer -->
  <footer class="mt-20 border-t border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© 2025 K‑Tutor Careers. All rights reserved.</p>
        <a href="mailto:careers@ktutor.example" class="hover:text-rose-700">careers@ktutor.example</a>
      </div>
    </div>
  </footer>
</body>
</html>
