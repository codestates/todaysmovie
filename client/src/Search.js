import './Search.css';

export default function Search () {
  return (
<fieldset className="field-container">
  <input type="text" placeholder="Search..." className="field" />
  <div className="icons-container">
    <div className="icon-search"></div>
    <div className="icon-close">
      <div className="x-up"></div>
      <div className="x-down"></div>
    </div>
  </div>
</fieldset>
  )
}