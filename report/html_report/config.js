report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document.png",
        "test": "../bitmaps_test/20200225-110353/Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -8
          },
          "misMatchPercentage": "0.09",
          "analysisTime": 85
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/H1_heading.png",
        "test": "../bitmaps_test/20200225-110353/H1_heading.png",
        "selector": "h1",
        "fileName": "H1_heading.png",
        "label": "H1 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/H2_heading.png",
        "test": "../bitmaps_test/20200225-110353/H2_heading.png",
        "selector": "h2:first-of-type",
        "fileName": "H2_heading.png",
        "label": "H2 heading",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -30
          },
          "misMatchPercentage": "0.70",
          "analysisTime": 42
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Paragraph.png",
        "test": "../bitmaps_test/20200225-110353/Paragraph.png",
        "selector": "p:first-of-type",
        "fileName": "Paragraph.png",
        "label": "Paragraph",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20200225-110353/Ordered_list.png",
        "selector": "ol:first-of-type",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "27.31",
          "analysisTime": 63
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20200225-110353/Ordered_list.png",
        "selector": "ol:first-of-type.__n1",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "27.31",
          "analysisTime": 61
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20200225-110353/Ordered_list.png",
        "selector": "ol:first-of-type.__n2",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "27.31",
          "analysisTime": 62
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20200225-110353/Ordered_list.png",
        "selector": "ol:first-of-type.__n3",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "27.31",
          "analysisTime": 54
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Ordered_list.png",
        "test": "../bitmaps_test/20200225-110353/Ordered_list.png",
        "selector": "ol:first-of-type.__n4",
        "fileName": "Ordered_list.png",
        "label": "Ordered list",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "27.31",
          "analysisTime": 38
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Ordered_list.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Articles_17_to_30_link.png",
        "test": "../bitmaps_test/20200225-110353/Articles_17_to_30_link.png",
        "selector": "a:first-of-type",
        "fileName": "Articles_17_to_30_link.png",
        "label": "Articles 17 to 30 link",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/human-rights/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -42,
            "height": -5
          },
          "misMatchPercentage": "26.00",
          "analysisTime": 17
        },
        "diffImage": "../bitmaps_test/20200225-110353/failed_diff_Articles_17_to_30_link.png"
      },
      "status": "fail"
    }
  ]
});