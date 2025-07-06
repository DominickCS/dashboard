import { useState, useEffect } from "react";
import "./RSSFeedApp.css";

export default function RSSFeedApp(props) {
  const feedURL = props.url;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedItems, setFeedItems] = useState();
  const parser = new DOMParser();

  function extractRSSFeedItems(data) {
    const items = data.getElementsByTagName("item");
    const entries = data.getElementsByTagName("entry");
    const feedTitle = data.getElementsByTagName("title");
    const feedItems = [];

    for (let i = 0; i < items.length; i++) {
      const articleTitle = items[i].querySelector("title").textContent;
      const link = items[i].querySelector("link").textContent;
      feedItems.push({ articleTitle, link });
    }

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i].querySelector("title").textContent;
      const linkId = entries[i].querySelector("id").textContent;
      feedItems.push({ entry, linkId });
    }

    feedItems.push(feedTitle);
    setFeedItems(feedItems);
    return feedItems;
  }

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(feedURL);
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`);
        }
        const result = await response.text();
        const parsedResult = parser.parseFromString(result, "application/xml");
        // console.log(parsedResult); // FEED DEBUG
        extractRSSFeedItems(parsedResult);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeed(feedURL);
  }, []);

  // FEED DEBUG
  // console.log(feedItems);

  return (
    <>
      {!isLoading ? (
        <div className="rssFeed">
          <div>
            <h2>From {feedItems[feedItems.length - 1][0].textContent}</h2>
            <ul>
              {feedItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <a href={item.link} target="_blank">
                      {item.articleTitle}
                    </a>
                  ) : (
                    <a href={item.linkId} target="_blank">
                      {item.entry}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Fetching RSS Feeds</p>
      )}
    </>
  );
}
