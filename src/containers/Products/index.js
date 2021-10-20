import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Theme from "../../Context";
function Products() {
  let val = useContext(Theme);
  // console.log(theme)
  let darkMode = val?.[0];
  console.log(darkMode);
  let theme = val?.[1];
  console.log(theme);
  return (
    <div
      style={{
        backgroundColor: theme?.[darkMode]?.colora,
        color: theme?.[darkMode]?.colorc,
        height: "auto",
      }}
    >
      <h1>Products</h1>
      <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>  <div
        style={{
          backgroundColor: theme?.[darkMode]?.colora,
          color: theme?.[darkMode]?.colorc,
          borderColor: theme?.[darkMode]?.colorc,
          margin: "15px",
        }}
        className="card text-center"
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Products;
