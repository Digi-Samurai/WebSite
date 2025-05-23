import fs from "fs";
import path from "path";

export function getGalleryData() {
  const galleryRoot = path.join(process.cwd(), "../public", "events");

  if (!fs.existsSync(galleryRoot)) return [];

  const years = fs
    .readdirSync(galleryRoot)
    .filter((year) => fs.statSync(path.join(galleryRoot, year)).isDirectory());

  const data = [];

  years.forEach((year) => {
    const yearPath = path.join(galleryRoot, year);
    const months = fs
      .readdirSync(yearPath)
      .filter((month) => fs.statSync(path.join(yearPath, month)).isDirectory());

    const events = [];

    months.forEach((month) => {
      const monthPath = path.join(yearPath, month);
      const eventFolders = fs
        .readdirSync(monthPath)
        .filter((event) => fs.statSync(path.join(monthPath, event)).isDirectory());

      eventFolders.forEach((eventTitle) => {
        const eventPath = path.join(monthPath, eventTitle);
        const images = fs
          .readdirSync(eventPath)
          .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map((file) => `/events/${year}/${month}/${eventTitle}/${file}`);

        if (images.length > 0) {
          events.push({
            title: eventTitle,
            date: month,
            images,
          });
        }
      });
    });

    if (events.length > 0) {
      data.push({
        year,
        events,
      });
    }
  });

  return data;
}
