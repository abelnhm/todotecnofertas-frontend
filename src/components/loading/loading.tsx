import './loading.scss';

export function Loading() {
  return (
    <section className="loading" role="contentinfo">
      {/* <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
