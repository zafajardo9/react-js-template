import './SplitPanel.css';

export const SplitPanel = ({ left, right }) => {
  return (
    <div className="split-panel">
      <section className="split-panel__left">{left}</section>
      <section className="split-panel__right">{right}</section>
    </div>
  );
};
