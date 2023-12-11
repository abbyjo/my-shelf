import { useState, useEffect } from 'react';
import { getRSS } from '../utils/api';
import dayjs from 'dayjs';

function RssFeed(props) {
    const [updates, setUpdates] = useState([]);
    
    useEffect(() => {
        const getUpdates = async () => {
          try {
            const response = await getRSS(props.url);
            
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            
            const comicUpdates = await response.json();
            setUpdates(comicUpdates)
            // console.log(comicUpdates)
            console.log(updates)
          } catch (err) {
            console.error(err);
          }
        };
        getUpdates();
      }, [props.reload]);
    

    return (
        <div className="container text-center bg-warning-subtle pt-2 border border-bottom-0 border-warning">
          {updates.map((item, i) => {
            return (
                <div key={i} className="row border-bottom border-primary-subtle">
                    <div className="col m-2">
                        <p>{dayjs(item.item.pubDate).format('MM/DD/YY')}</p>
                    </div>
                    <div className="col m-2">
                        <a target="_blank" rel="noopener noreferrer" href={item.item.link}>{item.item.title}</a>
                    </div>
                </div>
            )
          })}
        </div>
    )

}

export default RssFeed;