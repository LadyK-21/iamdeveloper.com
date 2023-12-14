import { StreamGuestInfo } from "./StreamGuestInfo.ts";

const TWITCH_STREAM_URL = "https://www.twitch.tv/nickytonline";
const YOUTUBE_STREAM_URL = "https://www.youtube.com/@iamdeveloperdotcom/live";

function buildWebsiteLink({
  name,
  website,
}: {
  name: string;
  website: string | undefined;
}) {
  if (!website) {
    return "";
  }

  return `
  <li>
    <a href="${website}" title="${name}'s Website">
      <span class="visually-hidden">${name}'s Website</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    </a>
  </li>
  `;
}

function buildTwitterLink({
  name,
  twitter,
}: {
  name: string;
  twitter: string | undefined;
}) {
  if (!twitter) {
    return "";
  }

  const sanitizedTwitterUrl = twitter
    .replace(/https:\/\/(www\.)?twitter\.com\//, "")
    .replace("@", "");

  return `
  <li><a href="https://twitter.com/${sanitizedTwitterUrl}" title="${name}'s Twitter Profile"><span class="visually-hidden">${name}'s Twitter Profile</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
  `;
}

function buildTwitchLink({
  name,
  twitch,
}: {
  name: string;
  twitch: string | undefined;
}) {
  if (!twitch) {
    return "";
  }

  const sanitizedTwitchUrl = twitch
    .replace(/https:\/\/(www\.)?twitch\.tv\//, "")
    .replace("@", "");

  return `
  <li><a href="https://twitch.tv/${sanitizedTwitchUrl}" title="${name}'s Twitch Profile"><span class="visually-hidden">${name}'s Twitch Profile</span> <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg></a></li>
  `;
}

function buildYoutubeLink({
  name,
  youtube,
}: {
  name: string;
  youtube: string | undefined;
}) {
  if (!youtube) {
    return "";
  }

  const sanitizedYoutubeUrl = youtube.replace(
    /https?:\/\/(www\.)?youtube\.com\//,
    ""
  );

  return `
  <li><a href="https://youtube.com/${sanitizedYoutubeUrl}" title="${name}'s YouTube channel"><span class="visually-hidden">${name}'s YouTube channel</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
  </a>
  </li>
  `;
}

function buildGithubLink({
  name,
  github,
}: {
  name: string;
  github: string | undefined;
}) {
  if (!github) {
    return "";
  }

  const sanitizedGithubUrl = github.replace(
    /https:\/\/(www\.)?github\.com\//,
    ""
  );

  return `
    <li><a href="https://github.com/${sanitizedGithubUrl}" title="${name}'s GitHub profile"><span class="visually-hidden">${name}'s GitHub profile</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
    </li>`;
}

function buildHeadingAnchor(headingId: string) {
  return `
  <a href="#${headingId}" class="heading-permalink">
        <span class="visually-hidden"> permalink</span>
        <svg fill="currentColor" aria-hidden="true" focusable="false" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"></path>
        </svg></a>
  `;
}

function getHeadingId(name: string, dateTime: string) {
  const [date] = dateTime.split("T");
  return `${date}-${encodeURIComponent(name)}`.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
}

export function getLocalizedDate({
  date,
  locale,
  timezone,
  showTime = false,
}: {
  date: string;
  locale: string;
  timezone: string;
  showTime: boolean;
}) {
  const timeStyle = showTime ? "long" : undefined;
  const options: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    dateStyle: "full",
    timeStyle,
  };

  return new Date(date).toLocaleString(locale, options);
}

function getStreamLinks(youtubeLink: string) {
  return `
    <div class="align-end box-flex gap-100">Watch live on:
      <ul class="guest-stream-links box-flex gap-100">
        ${youtubeLink ? `<li><a href="${youtubeLink}">YouTube</a></li>` : ""}
        <li><a href="${TWITCH_STREAM_URL}">Twitch</a></li>
      </ul>
    </div>
  `;
}

export function getScheduleMarkup({
  schedule,
  locale,
  timezone,
}: {
  schedule: StreamGuestInfo[];
  locale: string;
  timezone: string;
}) {
  const scheduleMarkup = schedule
    .map(
      (
        {
          date,
          streamTitle,
          streamDescription,
          youtubeStreamLink,
          name,
          title,
          twitter,
          website,
          twitch,
          youtube,
          github,
        },
      ) => {
        const guestDate = getLocalizedDate({
          date,
          locale,
          timezone,
          showTime: true,
        });
        const headingId = getHeadingId(name, date);

        return `
    <li class="post-list__item">
      <h2 id="${headingId}">${streamTitle} ${buildHeadingAnchor(headingId)}</h2>
      <time datetime="${date}">${guestDate}</time>
      <div>
        ${github === "nickytonline" ? "" : `<div>Guest: ${name}${title ? `, ${title}` : ""}</div>`}
        <nav class="nav" aria-label="Links for live stream guest ${name}">
          <ul>
          ${buildWebsiteLink({ name, website })}
          ${buildGithubLink({ name, github })}
          ${buildTwitterLink({ name, twitter })}
          ${buildTwitchLink({ name, twitch })}
          ${buildYoutubeLink({ name, youtube })}
          </ul>
        </nav>
        ${youtubeStreamLink ? getStreamLinks(youtubeStreamLink) : ""}
        ${streamDescription
            ? `<p class="gap-top-300">${streamDescription}</p>`
            : ``
          }
      </div>
    </li>
  `;
      }
    )
    .join("");

  return `<ol class="[ post-list__items ] [ sf-flow ] [ pad-top-300 ]">${scheduleMarkup}</ol>`;
}

export function getLatestGuestMarkup({
  guests,
  locale,
  timezone,
}: {
  guests: StreamGuestInfo[];
  locale: string;
  timezone: string;
}) {
  if (!guests) {
    return ``;
  }

  return guests.reduce((acc, guest) => {

    const { date, streamTitle, name } = guest;
    const headingId = getHeadingId(name, streamTitle);
    const guestDate = getLocalizedDate({
      date,
      locale,
      timezone,
      showTime: true,
    });

    return acc + `
    <ol class="post-list__items sf-flow pad-top-300" reversed>
      <li class="post-list__item">
        <h3 class="font-base leading-tight text-600 weight-mid">
          <a href="/pages/stream-schedule/#${headingId}" class="post-list__link" rel="bookmark">${streamTitle}</a>
        </h3>
        <time datetime="${date}" class="text-500 gap-top-300 weight-mid">${guestDate}</time>
      </li>
    </ol>
    `;
  }
    , '<h2 class="post-list__heading text-700 md:text-800">Upcoming Live Streams</h2>');
}