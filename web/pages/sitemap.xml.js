import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset
                  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

            <url>
              <loc>https://www.okie.design/</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>1.00</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Alerts</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Badges</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Breadcrumbs</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Buttons</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/ButtonGroups</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Collapse</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Tooltips</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.80</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Samples</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.64</priority>
            </url>
            <url>
              <loc>https://www.okie.design/Documentation/Notifications</loc>
              <lastmod>2022-02-08T13:51:58+00:00</lastmod>
              <priority>0.64</priority>
            </url>
          </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
