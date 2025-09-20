"use strict";
var _Sources = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/paperback-extensions-common/lib/base/Source.js
  var require_Source = __commonJS({
    "node_modules/paperback-extensions-common/lib/base/Source.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
      var Source2 = class {
        constructor(cheerio) {
          this.cheerio = cheerio;
        }
        /**
         * @deprecated use {@link Source.getSearchResults getSearchResults} instead
         */
        searchRequest(query, metadata) {
          return this.getSearchResults(query, metadata);
        }
        /**
         * @deprecated use {@link Source.getSearchTags} instead
         */
        async getTags() {
          return this.getSearchTags?.();
        }
      };
      exports.Source = Source2;
      function convertTime(timeAgo) {
        let time;
        let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
        trimmed = trimmed == 0 && timeAgo.includes("a") ? 1 : trimmed;
        if (timeAgo.includes("minutes")) {
          time = new Date(Date.now() - trimmed * 6e4);
        } else if (timeAgo.includes("hours")) {
          time = new Date(Date.now() - trimmed * 36e5);
        } else if (timeAgo.includes("days")) {
          time = new Date(Date.now() - trimmed * 864e5);
        } else if (timeAgo.includes("year") || timeAgo.includes("years")) {
          time = new Date(Date.now() - trimmed * 31556952e3);
        } else {
          time = new Date(Date.now());
        }
        return time;
      }
      exports.convertTime = convertTime;
      function urlEncodeObject(obj) {
        let ret = {};
        for (const entry of Object.entries(obj)) {
          ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
        }
        return ret;
      }
      exports.urlEncodeObject = urlEncodeObject;
    }
  });

  // node_modules/paperback-extensions-common/lib/base/Tracker.js
  var require_Tracker = __commonJS({
    "node_modules/paperback-extensions-common/lib/base/Tracker.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tracker = void 0;
      var Tracker = class {
        constructor(cheerio) {
          this.cheerio = cheerio;
        }
      };
      exports.Tracker = Tracker;
    }
  });

  // node_modules/paperback-extensions-common/lib/base/index.js
  var require_base = __commonJS({
    "node_modules/paperback-extensions-common/lib/base/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Source(), exports);
      __exportStar(require_Tracker(), exports);
    }
  });

  // node_modules/paperback-extensions-common/lib/models/Chapter.js
  var require_Chapter = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/Chapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/HomeSection.js
  var require_HomeSection = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/HomeSection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.HomeSectionType = void 0;
      var HomeSectionType;
      (function(HomeSectionType2) {
        HomeSectionType2["singleRowNormal"] = "singleRowNormal";
        HomeSectionType2["singleRowLarge"] = "singleRowLarge";
        HomeSectionType2["doubleRow"] = "doubleRow";
        HomeSectionType2["featured"] = "featured";
      })(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Button.js
  var require_Button = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Button.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Form.js
  var require_Form = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Form.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Header.js
  var require_Header = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Header.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/InputField.js
  var require_InputField = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/InputField.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Label.js
  var require_Label = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Label.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Link.js
  var require_Link = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Link.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/MultilineLabel.js
  var require_MultilineLabel = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/MultilineLabel.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/NavigationButton.js
  var require_NavigationButton = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/NavigationButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/OAuthButton.js
  var require_OAuthButton = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/OAuthButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Section.js
  var require_Section = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Section.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Select.js
  var require_Select = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Select.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Switch.js
  var require_Switch = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Switch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/WebViewButton.js
  var require_WebViewButton = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/WebViewButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/FormRow.js
  var require_FormRow = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/FormRow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/Stepper.js
  var require_Stepper = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/Stepper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/DynamicUI/index.js
  var require_DynamicUI = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/DynamicUI/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Button(), exports);
      __exportStar(require_Form(), exports);
      __exportStar(require_Header(), exports);
      __exportStar(require_InputField(), exports);
      __exportStar(require_Label(), exports);
      __exportStar(require_Link(), exports);
      __exportStar(require_MultilineLabel(), exports);
      __exportStar(require_NavigationButton(), exports);
      __exportStar(require_OAuthButton(), exports);
      __exportStar(require_Section(), exports);
      __exportStar(require_Select(), exports);
      __exportStar(require_Switch(), exports);
      __exportStar(require_WebViewButton(), exports);
      __exportStar(require_FormRow(), exports);
      __exportStar(require_Stepper(), exports);
    }
  });

  // node_modules/paperback-extensions-common/lib/models/ChapterDetails.js
  var require_ChapterDetails = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/ChapterDetails.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/Manga.js
  var require_Manga = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/Manga.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MangaStatus = void 0;
      var MangaStatus2;
      (function(MangaStatus3) {
        MangaStatus3[MangaStatus3["ONGOING"] = 1] = "ONGOING";
        MangaStatus3[MangaStatus3["COMPLETED"] = 0] = "COMPLETED";
        MangaStatus3[MangaStatus3["UNKNOWN"] = 2] = "UNKNOWN";
        MangaStatus3[MangaStatus3["ABANDONED"] = 3] = "ABANDONED";
        MangaStatus3[MangaStatus3["HIATUS"] = 4] = "HIATUS";
      })(MangaStatus2 = exports.MangaStatus || (exports.MangaStatus = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/MangaTile.js
  var require_MangaTile = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/MangaTile.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/RequestObject.js
  var require_RequestObject = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/RequestObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SearchRequest.js
  var require_SearchRequest = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SearchRequest.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SearchOperator = void 0;
      var SearchOperator;
      (function(SearchOperator2) {
        SearchOperator2["AND"] = "AND";
        SearchOperator2["OR"] = "OR";
      })(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/TagSection.js
  var require_TagSection = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/TagSection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SourceTag.js
  var require_SourceTag = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SourceTag.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TagType = void 0;
      var TagType2;
      (function(TagType3) {
        TagType3["BLUE"] = "default";
        TagType3["GREEN"] = "success";
        TagType3["GREY"] = "info";
        TagType3["YELLOW"] = "warning";
        TagType3["RED"] = "danger";
      })(TagType2 = exports.TagType || (exports.TagType = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/Languages.js
  var require_Languages = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/Languages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LanguageCode = void 0;
      var LanguageCode2;
      (function(LanguageCode3) {
        LanguageCode3["UNKNOWN"] = "_unknown";
        LanguageCode3["BENGALI"] = "bd";
        LanguageCode3["BULGARIAN"] = "bg";
        LanguageCode3["BRAZILIAN"] = "br";
        LanguageCode3["CHINEESE"] = "cn";
        LanguageCode3["CZECH"] = "cz";
        LanguageCode3["GERMAN"] = "de";
        LanguageCode3["DANISH"] = "dk";
        LanguageCode3["ENGLISH"] = "gb";
        LanguageCode3["SPANISH"] = "es";
        LanguageCode3["FINNISH"] = "fi";
        LanguageCode3["FRENCH"] = "fr";
        LanguageCode3["WELSH"] = "gb";
        LanguageCode3["GREEK"] = "gr";
        LanguageCode3["CHINEESE_HONGKONG"] = "hk";
        LanguageCode3["HUNGARIAN"] = "hu";
        LanguageCode3["INDONESIAN"] = "id";
        LanguageCode3["ISRELI"] = "il";
        LanguageCode3["INDIAN"] = "in";
        LanguageCode3["IRAN"] = "ir";
        LanguageCode3["ITALIAN"] = "it";
        LanguageCode3["JAPANESE"] = "jp";
        LanguageCode3["KOREAN"] = "kr";
        LanguageCode3["LITHUANIAN"] = "lt";
        LanguageCode3["MONGOLIAN"] = "mn";
        LanguageCode3["MEXIAN"] = "mx";
        LanguageCode3["MALAY"] = "my";
        LanguageCode3["DUTCH"] = "nl";
        LanguageCode3["NORWEGIAN"] = "no";
        LanguageCode3["PHILIPPINE"] = "ph";
        LanguageCode3["POLISH"] = "pl";
        LanguageCode3["PORTUGUESE"] = "pt";
        LanguageCode3["ROMANIAN"] = "ro";
        LanguageCode3["RUSSIAN"] = "ru";
        LanguageCode3["SANSKRIT"] = "sa";
        LanguageCode3["SAMI"] = "si";
        LanguageCode3["THAI"] = "th";
        LanguageCode3["TURKISH"] = "tr";
        LanguageCode3["UKRAINIAN"] = "ua";
        LanguageCode3["VIETNAMESE"] = "vn";
      })(LanguageCode2 = exports.LanguageCode || (exports.LanguageCode = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/Constants.js
  var require_Constants = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/Constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/MangaUpdate.js
  var require_MangaUpdate = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/MangaUpdate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/PagedResults.js
  var require_PagedResults = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/PagedResults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/ResponseObject.js
  var require_ResponseObject = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/ResponseObject.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/RequestManager.js
  var require_RequestManager = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/RequestManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/RequestHeaders.js
  var require_RequestHeaders = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/RequestHeaders.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SourceInfo.js
  var require_SourceInfo = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SourceInfo.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ContentRating = void 0;
      var ContentRating;
      (function(ContentRating2) {
        ContentRating2["EVERYONE"] = "EVERYONE";
        ContentRating2["MATURE"] = "MATURE";
        ContentRating2["ADULT"] = "ADULT";
      })(ContentRating = exports.ContentRating || (exports.ContentRating = {}));
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SourceStateManager.js
  var require_SourceStateManager = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SourceStateManager.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/RequestInterceptor.js
  var require_RequestInterceptor = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/RequestInterceptor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/TrackedManga.js
  var require_TrackedManga = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/TrackedManga.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SourceManga.js
  var require_SourceManga = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SourceManga.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/TrackedMangaChapterReadAction.js
  var require_TrackedMangaChapterReadAction = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/TrackedMangaChapterReadAction.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/TrackerActionQueue.js
  var require_TrackerActionQueue = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/TrackerActionQueue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SearchField.js
  var require_SearchField = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SearchField.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/RawData.js
  var require_RawData = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/RawData.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/SearchFilter.js
  var require_SearchFilter = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/SearchFilter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/paperback-extensions-common/lib/models/index.js
  var require_models = __commonJS({
    "node_modules/paperback-extensions-common/lib/models/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_Chapter(), exports);
      __exportStar(require_HomeSection(), exports);
      __exportStar(require_DynamicUI(), exports);
      __exportStar(require_ChapterDetails(), exports);
      __exportStar(require_Manga(), exports);
      __exportStar(require_MangaTile(), exports);
      __exportStar(require_RequestObject(), exports);
      __exportStar(require_SearchRequest(), exports);
      __exportStar(require_TagSection(), exports);
      __exportStar(require_SourceTag(), exports);
      __exportStar(require_Languages(), exports);
      __exportStar(require_Constants(), exports);
      __exportStar(require_MangaUpdate(), exports);
      __exportStar(require_PagedResults(), exports);
      __exportStar(require_ResponseObject(), exports);
      __exportStar(require_RequestManager(), exports);
      __exportStar(require_RequestHeaders(), exports);
      __exportStar(require_SourceInfo(), exports);
      __exportStar(require_SourceStateManager(), exports);
      __exportStar(require_RequestInterceptor(), exports);
      __exportStar(require_TrackedManga(), exports);
      __exportStar(require_SourceManga(), exports);
      __exportStar(require_TrackedMangaChapterReadAction(), exports);
      __exportStar(require_TrackerActionQueue(), exports);
      __exportStar(require_SearchField(), exports);
      __exportStar(require_RawData(), exports);
      __exportStar(require_SearchFilter(), exports);
    }
  });

  // node_modules/paperback-extensions-common/lib/index.js
  var require_lib = __commonJS({
    "node_modules/paperback-extensions-common/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_base(), exports);
      __exportStar(require_models(), exports);
    }
  });

  // src/Mangago/Mangago.ts
  var Mangago_exports = {};
  __export(Mangago_exports, {
    Mangago: () => Mangago
  });
  var import_paperback_extensions_common = __toESM(require_lib());
  var SOURCE_DOMAIN = "https://mangago.me/";
  var Mangago = class extends import_paperback_extensions_common.Source {
    constructor(cheerio) {
      super(cheerio);
    }
    get version() {
      return "0.1.0";
    }
    get name() {
      return "Mangago";
    }
    get description() {
      return "Mangago";
    }
    get author() {
      return "";
    }
    get authorWebsite() {
      return "";
    }
    get icon() {
      return "logo.png";
    }
    get hentaiSource() {
      return false;
    }
    get sourceTags() {
      return [];
    }
    get rateLimit() {
      return 2;
    }
    get websiteBaseURL() {
      return SOURCE_DOMAIN;
    }
    /**
     * This method has been provided to you as it's probably rather rare that it ever needs to be changed
     * even on different sources.
     * This Method should point to the URL of a specific manga object on your source. Make sure to change
     * line 33 so that it points to your manga! In this case, 'id' is the manga identifier
     */
    getMangaDetailsRequest(ids) {
      let requests = [];
      for (let id of ids) {
        let metadata = { "id": id };
        requests.push(createRequestObject({
          url: `${SOURCE_DOMAIN}/${id}`,
          metadata,
          method: "GET"
        }));
      }
      return requests;
    }
    getMangaDetails(data, metadata) {
      let manga = [];
      let $ = this.cheerio.load(data);
      throw new Error("Method not implemented.");
    }
    getChaptersRequest(mangaId) {
      throw new Error("Method not implemented.");
    }
    getChapters(data, metadata) {
      throw new Error("Method not implemented.");
    }
    getChapterDetailsRequest(mangaId, chapId) {
      throw new Error("Method not implemented.");
    }
    getChapterDetails(data, metadata) {
      throw new Error("Method not implemented.");
    }
    searchRequest(query) {
      throw new Error("Method not implemented.");
    }
    search(data, metadata) {
      throw new Error("Method not implemented.");
    }
  };
  return __toCommonJS(Mangago_exports);
})();
this.Sources = _Sources; if (typeof exports === 'object' && typeof module !== 'undefined') {module.exports.Sources = this.Sources;}
