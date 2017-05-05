;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontx0" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M541.030851 347.378685c-9.21525-7.574512-19.762899-11.366885-31.655228-11.366885s-22.506495 3.793396-31.83022 11.366885c-9.328842 7.579629-16.559819 21.160949-21.68577 40.74703-6.766378 25.417903-10.143427 68.203358-10.143427 128.362506s3.027064 101.491509 9.094495 123.990942c6.061291 22.50455 13.695468 37.484729 22.910718 44.944632 9.20911 7.465019 19.762899 11.192923 31.655228 11.192923s22.500355-3.787256 31.83022-11.366885c9.323725-7.574512 16.554703-21.160949 21.68577-40.74703 6.760238-25.182542 10.143427-67.854411 10.143427-128.013559s-3.033204-101.485369-9.094495-123.990942C557.875162 369.998869 550.239961 354.958314 541.030851 347.378685z"  ></path>' +
    '' +
    '<path d="M512.023025 4.069689c-280.532469 0-507.9501 227.383754-507.9501 507.929288 0 280.497439 227.417631 507.931335 507.9501 507.931335 280.510979 0 507.902002-227.433896 507.902002-507.931335C1019.926051 231.452419 792.535027 4.069689 512.023025 4.069689zM625.502099 725.646891c-27.752178 34.976606-66.457251 52.464909-116.126475 52.464909-49.903571 0-90.127293-19.176758-120.673211-57.536414-30.551035-38.353516-45.820412-106.732883-45.820412-205.136054 0-96.534614 16.789049-166.017104 50.368171-208.458729 27.747061-34.976606 66.457251-52.464909 116.126475-52.464909s88.494029 17.72264 116.475437 53.163827c33.343752 41.971927 50.018186 111.574145 50.018186 208.8087C675.870271 613.493555 659.080198 683.211407 625.502099 725.646891z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.44096 800.1536l-176.41472-176.49664c-2.08896-2.08896-4.34176-3.60448-6.47168-5.28384 29.77792-45.71136 47.14496-100.18816 47.14496-158.9248 0-161.21856-130.62144-291.84-291.88096-291.84-161.13664 0-291.88096 130.62144-291.88096 291.84 0 161.25952 130.74432 291.88096 291.88096 291.88096 58.65472 0 113.21344-17.44896 159.00672-47.26784 1.67936 2.2528 3.19488 4.38272 5.24288 6.47168l176.45568 176.49664c12.00128 12.00128 27.72992 17.94048 43.45856 17.94048s31.41632-5.9392 43.45856-17.94048C894.3616 863.0272 894.3616 824.15616 870.44096 800.1536M442.85952 659.21024c-110.10048 0-199.68-89.62048-199.68-199.72096s89.62048-199.68 199.68-199.68 199.72096 89.62048 199.72096 199.68S552.91904 659.21024 442.85952 659.21024"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msnui-cart" viewBox="0 0 1031 1024">' +
    '' +
    '<path d="M366.498 747.328q17.47 0 33.101 6.437t27.125 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.125 18.389-33.101 6.896q-18.389 0-34.021-6.896t-27.125-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.125-17.929 34.021-6.437zM748.999 749.166q17.47 0 33.561 6.437t27.584 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.584 18.389-33.561 6.896-33.101-6.896-27.123-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.123-17.929 33.101-6.437zM903.47 226.906q25.745 0 39.997 6.896t20.228 17.010 5.517 21.607-3.218 19.768-11.954 34.021-19.768 56.548-21.148 61.144-17.010 47.813q-11.954 36.779-29.883 51.030t-44.595 14.252h-482.723l12.873 82.752h464.333q44.136 0 44.136 37.699 0 18.389-8.735 32.182t-34.48 12.873h-481.803q-18.389 0-30.802-8.276t-20.688-21.607-13.333-28.963-7.816-29.423q-0.92-5.517-5.057-26.665t-10.115-52.869-13.333-70.8-14.713-78.615q-17.47-92.867-39.538-206.881h-68.961q-13.793 0-22.987-6.896t-15.172-16.55-8.276-20.688-2.298-20.228q0-18.389 12.413-30.343t33.561-11.034h92.867q18.389 0 29.423 5.517t17.47 13.793 9.195 17.010 4.598 15.172q1.839 7.356 3.678 20.688t3.678 27.125q2.759 16.55 5.517 34.94h628.918zM869.449 308.739l-575.589-1.839 32.182 166.424 480.884 0.92z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M536.380952 48.713143C334.409143 48.713143 170.666667 215.04 170.666667 420.230095s365.714286 603.721143 365.714286 603.721143S902.095238 625.42019 902.095238 420.230095 738.352762 48.713143 536.380952 48.713143zM536.380952 513.121524c-75.776 0-137.167238-62.366476-137.167238-139.312762S460.604952 234.496 536.380952 234.496c75.727238 0 137.167238 62.366476 137.167238 139.312762S612.10819 513.121524 536.380952 513.121524z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M545.216519 639.627772 876.148627 310.679855 961.610044 310.067918 544.349779 714.329125 488.964354 714.329125 62.389956 309.886793 145.754618 309.669852 489.614154 638.728286Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)