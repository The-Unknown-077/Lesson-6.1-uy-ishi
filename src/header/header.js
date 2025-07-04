import logo from "../assets/Logo (1).svg"
import "./header.css"

function Header() {
  return (
    <header className="header shrink">
      <div className="container">
        <nav className="navbar">
          <div className="navbar_logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="navbar_collection">
            <li className="navbar_item">
              <a className="navbar_link" href="#home">
                <h3>Home</h3>
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#brands">
                <h3>
                  Brands {""}
                  <i>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 5.625L7.5 9.375L11.25 5.625"
                        stroke="#8B8E99"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                </h3>
              </a>
              <ul className="drop_down">
                <li>Apple</li>
                <li>Samsung</li>
                <li>Xiaomi</li>
              </ul>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#recent">
                <h3>Recent Products</h3>
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#contact">
                <h3>Contact</h3>
              </a>
            </li>
            <li className="navbar_item">
              <a className="navbar_link" href="#about">
                <h3>About</h3>
              </a>
            </li>
          </ul>

          <div className="menu_bar">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8H17M7 12H17M7 16H17"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>

          <ul className="nav_icons">
            <li className="navbar_item">
              <i>
                <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <rect width="20.6202" height="23" fill="url(#pattern0_9_15)" />
                  <defs>
                    <pattern id="pattern0_9_15" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_9_15" transform="matrix(0.0111111 0 0 0.00996143 0 0.0517358)" />
                    </pattern>
                    <image id="image0_9_15" width="90" height="90" preserveAspectRatio="none" href="data:image/png;base64,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" />
                  </defs>
                </svg>

              </i>
            </li>
            <li className="navbar_item">
              <i>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <rect width="22" height="23" fill="url(#pattern0_9_18)" />
                  <defs>
                    <pattern id="pattern0_9_18" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_9_18" transform="matrix(0.0111111 0 0 0.010628 0 0.0217391)" />
                    </pattern>
                    <image id="image0_9_18" width="90" height="90" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEHElEQVR4nO3cz4tVZRzH8c/XmUAlg2hsExY2RRNqoFIEokLoWIiLBLEfVH9Aumujq1wltCzEomXtg35hCw2cqTFpUeHMTTHTaKFBpIWgOL5dPGcgLs0Zz7n3fp8z935fMKuZcz/n+XDumfPjOUcKIYQQQgghhIay3CtQBnhM0g5JmySNSXpE0ori19ckXZLUkjQh6ZiZnc+xnosSMAy8CnxLdZPAK8BQ7nE0GvA8cLZGwe1awHju8TQOsBz4qAsFt/sQWJZ7fI0APAj80IOS55wGVuYeZ1ZFya0eljynNbBlk3YXvdyS250GluYetzt6s09eyNHc43YFjGcoec4LOcbsfsICDEualvS4d3ahJWmtmc16hi7xDCu8pHwlS+kMc493aI6i38yQ2W6fd6DrroN07eKcZ+Y8kDRqZhe8Ar236B3OefMxSa6n6N5Fb3LOK7PZM8y76Ced88qMeYZ5F73KOa/Mw55h3kWvWPhP3NznGeZ91IFn3kLMzG38OY6jB1IU7cS76JvOeWVueIZ5F/2Pc16Za55h3kX/7pxX5pJnmHfR0855ZWY8w7yLnnTOKzPhGeZd9DGlK2e5obQublyLLqZsTXlmzmPSzH7zDMxxHP1+hsx273kH5rhnOCTpjKQnvLML05Ke6vt7hsUA93vn/sd+75KzIs2L83Yk97jdActIs4e8TDGIM5UkCViJz9y7GWAk93izKsr+voclTzGoExzbkXYjR3tQ8hEGdXdRBthG+pp36gzwXO7xNBowBLwMTAC3K5R7GzgJ7AUad0Oj6U9lrVaa6LJZaapC+1NZF5UmLZ5UeirL9bQ6hBBCCCGEEEJYRIBVwJoefv4aoEkT4P0AzwCHgZ+KC0I3gQPdvBgELAEOFp8N8CPwDvB0tzIaCRgFDgHnSq7AnQA2diFrI/BNSc5Z4G3g0W6MLbtiq9oFfAXM3u31TuBLYEuVLbzI2lpk3a1Z4AtgZ5WsxiC9F+kN4JcKg/4/l4GPgdeA9cAIcE/xMwJsAF4HPgGudJg1U3zWcO7+FgQY6cVTv3Y46JzOk248NPNaPfAs6UZov/iOJv3jBJaSjiBu5e2lJ2aBD4DlnfbU0dcDGJX0qaS1na5Iw/0s6cVOXmBY+z8tsFXSKfV/yZK0TtIpYEvdD6i1RZP2Xccl3Vs3eJG6LmnczCo/uVC5aOABpec/BnX2z5+SxszsryoL1dl1HNTgliylsR+oulCdonfVWKbf7Ky6QJ1dx3VJg/6+z3/NrNKbGups0VdqLNNvLlddoE7Rn9dYpt98VnWBOruOh5QO4O+vumyfuCppnZlVety68hZtZn9I2ivnh9Yb4m9Ju6uWLHVwCk6a6fmWpO2SVktq/uXFem5JuiDpa0nvmtnFzOsTQgghhBBCCCGEkN0dCw6ZaydNERoAAAAASUVORK5CYII=" />
                  </defs>
                </svg>

              </i>
            </li>
            <li className="navbar_item">
              <i>
                <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <rect width="21" height="23" fill="url(#pattern0_9_17)" />
                  <defs>
                    <pattern id="pattern0_9_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_9_17" transform="matrix(0.0111111 0 0 0.0101449 0 0.0434783)" />
                    </pattern>
                    <image id="image0_9_17" width="90" height="90" preserveAspectRatio="none" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAEB0lEQVR4nO2cTYgcRRTH/2/FhIgGkb3I6lUJnrwEPXtRvAbxnEsuiQoK3r15E1QQb4pevEr8zAYETVZUNiCIHzlG/EpWcTdCItmfh+6FQbp6enqqurpr3g8Ghqnqeq//U/26XlV1S47jOI7jOIMD3AG8DvxFmGvAJnAKOJLb50kCvNEicBOXgeO5/Z4UwBrwz4JCA1wHHs3t/9ixgy/AmqQ9SX3Cwc+SjpnZbizHSmPt4IuZ7Ut6u2c7G5LORPFoFQCOAK8Cf/YIIT/l9r8YgNuAp1vEPpbbx6IAvg4I/UJu38bK2vwqjZwN/P5kX0ecBoDjgR79L3B3bv+KgWrM/WtA7Kdy+zdGeoWOeij4YaDYw0dMgBOBHv07VfLjxAA4CtwIiP1Ibv/GRu+eZ2Z/S/oiUOzh438se4n7MG8IgAcDoWMfuC+3f2NiqR5tZj9IutxUJOmJZdouDZtfpR3gFUnPRvBlyuyomvl80cxuNlWIMQz7IEIbU+ceSc9JejlUIUaPPizpqqQ7l22rAK6Z2XpTwdI92sxuSPp02XYKIahnrAzOw0fF56GCWEKflUSktqZM8MqOIrSZ/SJpO0ZbE+eTUEHMyZ9QlrgqXKnzikZc6Hh81FYYU+ivJP0Wsb2p0TryiiZ0vRjQ+q8WzL6k820VYk/Qr2r4+MbMrrZViC30x5Iac/3CCY42Dogq9JzFgJKZmxmnWNtbtfBxXdLWvEou9PKcr+d7WokutJl9r+bFgFLpNKGWalvAKk0yzb0RSumEXpXw0Zp2z5JK6M8krcLu/84JWhKh65vDZoq2R0bnBY+UW7dKDx9z0+5ZUgtd8mLA3LR7lmRCr8BiQKfRxgGpd32WHD4WWpB2ofvRKe2eJbXQpS4GdEq7Z0kqdMGLAQvvYxliZ36J4WOhG6EUYUvYPICjkv6QdCi1rYG4Ymb3L3pQ8h5d4GJAr1A41EM9JYWPXvsMk4cOSQIekNRplmvk3JR0r5ntLHrgID3azH6UdHEIW4l5v4/I0kA9WpKAxySdG8peAm5JetjMvu1z8GAPXprZpqQ3h7KXgJf6ijw4wO3Ae4EnucbMa8BgV38UqB7Yf57qpVdjZwc4GeO8s/1LwLqkk5Iel/SQpHUNGMoC3FKVXF1SNSR9y1/I5TiO4ziOsxDAYeAZYAvYqz9bwBmqx5+LspsFYAO41JIwbAMbpdjNQt2j2k529qSj9bBcdrNBddl25fTU7WYD+HKBE442l53Lbs65jl11f8fHnpndNWW7uSdxurI/dbs5hf4uUd1R2s0p9DsL1H23ALt5oBpmbXe4IW0D0Tbf5LKbFarEoe2kUyYsg9vNCnAIOA1cBHbrz4X6t2Q9Kpddx3Ecx3Ecx3Gc0fEfYNIu96XZHgAAAAAASUVORK5CYII=" />
                  </defs>
                </svg>

              </i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;