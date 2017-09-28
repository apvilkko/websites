import React from 'react';

export const TitleLink = ({item}) =>
  <a href={item.urls ? item.urls[0].url : item.url}>{item.title}</a>;
const Date = ({item}) => <td className="date">{item.date}</td>;
export const List = ({header, data, renderItem}) => [
  header ? <h3 key="1">{header}</h3> : null,
  <table key="2" className="releases">
    <tbody>
      {data.map(item => (
        <tr key={item.title}>
          {renderItem(item)}
          <Date item={item} />
        </tr>
      ))}
    </tbody>
  </table>,
];

export default ({data}) => (
  <div>
    <h2>Discography</h2>

    <List header="EPs" data={data.EP} renderItem={item => (
      <td>
        <TitleLink item={item} />
        <ol className="tracks">
          {item.tracks.map(track =>
            <li key={track.title}>{track.title}</li>)}
        </ol>
        <span className="info">{item.label} {item.cat}</span>
      </td>
    )} />

    <List header="Remixes" data={data.remix} renderItem={item => (
      <td>
        <TitleLink item={item} />
        <span className="info">on {item.on} ({item.label} {item.cat})</span>
      </td>
    )} />

    <List header="Appearances" data={data.appearance} renderItem={item => (
      <td>
        <TitleLink item={item} />
        <span className="info">on {item.on} ({item.label} {item.cat})</span>
      </td>
    )} />

  </div>
);
