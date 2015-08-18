templating-benchmarks
=====================

This project provides a framework for running benchmarks against multiple templating languages under Node.js. The following templating engine modules are currently integrated:

Template | Syntax | Streaming | Asynchronous | Auto-escape
---- | ---- | ---- | ---- | ----
[dustjs-linkedin](https://github.com/linkedin/dustjs) | Text | ✔ | ✔ | ✔
[doT](https://github.com/olado/doT) | Text | ✖ | ✖ | ✖
[handlebars](https://github.com/wycats/handlebars.js) | Text | ✖ | ✖ | ✔
[jade](https://github.com/visionmedia/jade) | Short-hand HTML | ✖ | ✖ | ✔
[marko](https://github.com/marko-js/marko) | HTML | ✔ | ✔ | ✔
[nunjucks](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✔ | ✖
[swig](http://mozilla.github.io/nunjucks/) | Text | ✖ | ✖ | ✔

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Run Benchmarks](#run-benchmarks)
- [Current Results](#current-results)
	- [Performance](#performance)
	- [Compiled Size](#compiled-size)
- [Client-side Runtime Sizes](#client-side-runtime-sizes)
	- [Marko](#marko)
	- [Dust](#dust)
- [Contribute](#contribute)
	- [Adding a New Comparison Group](#adding-a-new-comparison-group)
	- [Adding a New Template Engine](#adding-a-new-template-engine)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Run Benchmarks

1. Clone this repository
2. `npm install`
3. `npm test` (or `make`)

# Current Results


## Performance

Higher numbers are better.

<!-- <performance> -->
```
                      RUNTIME PERFORMANCE
                      ===================
                      friends
                   ✓ marko »    2,345 op/s (fastest)
                    ✗ dust »      697 op/s (70.28% slower)
                    ✗ tmpl »        1 op/s (99.96% slower)

                      if-expression
                   ✓ marko »  226,559 op/s (fastest)
                    ✗ dust »   43,262 op/s (80.90% slower)
                    ✗ tmpl »       64 op/s (99.97% slower)

                      projects-escaped
      ✓ marko (native-for) »   63,489 op/s (fastest)
                   ✗ marko »   61,769 op/s (2.71% slower)
              ✗ handlebars »   43,836 op/s (30.95% slower)
                    ✗ dust »   20,419 op/s (67.84% slower)
                    ✗ tmpl »       64 op/s (99.90% slower)

                      projects-unescaped
      ✓ marko (native-for) »  247,942 op/s (fastest)
                   ✗ marko »  219,876 op/s (11.32% slower)
              ✗ handlebars »  124,578 op/s (49.76% slower)
                    ✗ dust »   71,776 op/s (71.05% slower)

                      reverse-helper
                   ✓ marko »  324,557 op/s (fastest)
                    ✗ dust »  256,247 op/s (21.05% slower)

                      search-results
      ✓ marko (native-for) »   31,095 op/s (fastest)
                   ✗ marko »   28,784 op/s (7.43% slower)
                    ✗ dust »   10,566 op/s (66.02% slower)
                    ✗ tmpl »       15 op/s (99.95% slower)

                      simple-1
      ✓ marko (native-for) »  147,895 op/s (fastest)
                     ✗ dot »  146,608 op/s (0.87% slower)
                   ✗ marko »  143,123 op/s (3.23% slower)
              ✗ handlebars »   84,509 op/s (42.86% slower)
                    ✗ dust »   78,668 op/s (46.81% slower)
                    ✗ swig »   71,148 op/s (51.89% slower)
                    ✗ jade »   59,533 op/s (59.75% slower)
                ✗ nunjucks »   33,713 op/s (77.20% slower)
                  ✗ plates »    7,593 op/s (94.87% slower)
                    ✗ tmpl »       64 op/s (99.96% slower)

                      simple-2
                   ✓ marko »  206,912 op/s (fastest)
                    ✗ dust »   93,322 op/s (54.90% slower)
                    ✗ tmpl »       64 op/s (99.97% slower)
```
<!-- </performance> -->

## Compiled Size

Lower numbers are better.

<!-- <size> -->
```
                      COMPILED SIZE (gzipped/uncompressed)
                      ====================================
                      friends
                   ✓ marko »   472 bytes gzipped     915 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   489 bytes gzipped    1387 bytes uncompressed
                                    3.48% larger              34.03% larger

                      if-expression
                   ✓ marko »   285 bytes gzipped     476 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   392 bytes gzipped    1043 bytes uncompressed
                                   27.30% larger              54.36% larger

                      projects-escaped
                   ✓ marko »   247 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   262 bytes gzipped     563 bytes uncompressed
                                    5.73% larger              32.68% larger
      ✗ marko (native-for) »   269 bytes gzipped     406 bytes uncompressed
                                    8.18% larger               6.65% larger
              ✗ handlebars »   551 bytes gzipped    1560 bytes uncompressed
                                   55.17% larger              75.71% larger

                      projects-unescaped
                   ✓ marko »   249 bytes gzipped     379 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     595 bytes uncompressed
                                    7.09% larger              36.30% larger
      ✗ marko (native-for) »   273 bytes gzipped     406 bytes uncompressed
                                    8.79% larger               6.65% larger
              ✗ handlebars »   523 bytes gzipped    1576 bytes uncompressed
                                   52.39% larger              75.95% larger

                      reverse-helper
                    ✓ dust »   151 bytes gzipped     321 bytes uncompressed
                                      (smallest)              23.05% larger
                   ✗ marko »   169 bytes gzipped     247 bytes uncompressed
                                   10.65% larger                 (smallest)

                      search-results
                   ✓ marko »   536 bytes gzipped    1189 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   545 bytes gzipped    1523 bytes uncompressed
                                    1.65% larger              21.93% larger
      ✗ marko (native-for) »   575 bytes gzipped    1242 bytes uncompressed
                                    6.78% larger               4.27% larger

                      simple-1
                   ✓ marko »   216 bytes gzipped     293 bytes uncompressed
                                      (smallest)                 (smallest)
      ✗ marko (native-for) »   237 bytes gzipped     320 bytes uncompressed
                                    8.86% larger               8.44% larger
                    ✗ dust »   249 bytes gzipped     462 bytes uncompressed
                                   13.25% larger              36.58% larger
                    ✗ jade »   337 bytes gzipped     664 bytes uncompressed
                                   35.91% larger              55.87% larger
                     ✗ dot »   353 bytes gzipped     523 bytes uncompressed
                                   38.81% larger              43.98% larger
              ✗ handlebars »   420 bytes gzipped     834 bytes uncompressed
                                   48.57% larger              64.87% larger
                ✗ nunjucks »   450 bytes gzipped     934 bytes uncompressed
                                   52.00% larger              68.63% larger
                    ✗ swig »   544 bytes gzipped    2557 bytes uncompressed
                                   60.29% larger              88.54% larger

                      simple-2
                   ✓ marko »   255 bytes gzipped     484 bytes uncompressed
                                      (smallest)                 (smallest)
                    ✗ dust »   268 bytes gzipped     648 bytes uncompressed
                                    4.85% larger              25.31% larger
```
<!-- </size> -->

# Client-side Runtime Sizes

Below are the approximate runtime sizes for each engine (lower numbers are better):

## Marko

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `marko` | ~1.2KB gzipped (2.7KB uncompressed) |
| `marko` +<br>`async-writer` + <br>`raptor-xml/util` | ~2.33KB gzipped (6.3KB uncompressed) |

_NOTE:_ Sizes are approximate because overhead associated with the CommonJS module loader varies. Size based on code as of April 7, 2014.

## Dust

| Modules        | Size |
| ------------- |:-------------:| -----:|
| `dust-core` | 3.41KB gzipped (10.07KB uncompressed) |
| `dust-core` +<br>`dust-helpers` | 4.7KB gzipped (14.2KB uncompressed) |

_NOTE:_ Size based on code as of April 7, 2014.

# Contribute

## Adding a New Comparison Group

Each comparison group should contain a data file (either `data.json` or `data.js`) and a set of templates to compare. The file extension of the template will be used to determine which engine should be used. If the data file has the `.js` extension then it should be a JavaScript module that exports the data. A sample directory structure is shown below:

```
templates
    ├── group1
    │   ├── data.js
    │   ├── template.dust
    │   └── template.marko
    ├── group2
    │   ├── data.json
    │   ├── template.dust
    │   └── template.marko
    ├── group3
    │   ├── data.json
    │   ├── template.dust
    │   ├── template.native-for.marko
    │   └── template.marko
    └── group4
        ├── data.json
        ├── template.dust
        └── template.marko
```

## Adding a New Template Engine

To register a new templating engine, simply create a new module under the `engines` directory and it will automatically be loaded. See existing engine modules for supported methods and properties.

Pull Requests welcome!
