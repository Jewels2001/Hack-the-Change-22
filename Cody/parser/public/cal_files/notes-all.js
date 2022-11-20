//
var SHInfo = {
  "Default": { "ShowText": "Show", "HideText": "Hide", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteAll": { "ShowText": "Show General Notice", "HideText": "Hide General Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteMobile": { "ShowText": "Show Mobile Notice", "HideText": "Hide Mobile Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteClasses": { "ShowText": "Show Classes Notice", "HideText": "Hide Classes Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteNotes": { "ShowText": "Show Notes Notice", "HideText": "Hide Notes Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NotePractice": { "ShowText": "Show Practice Notice", "HideText": "Hide Practice Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteSolutions": { "ShowText": "Show Solutions Notice", "HideText": "Hide Solutions Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteAsgn": { "ShowText": "Show Assignment Notice", "HideText": "Hide Assignment Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteExtras": { "ShowText": "Show Extras Notice", "HideText": "Hide Extras Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteAlg": { "ShowText": "Show Algebra Notice", "HideText": "Hide Algebra Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteCalcI": { "ShowText": "Show Calculus I Notice", "HideText": "Hide Calculus I Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteCalcII": { "ShowText": "Show Calculus II Notice", "HideText": "Hide Calculus II Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteCalcIII": { "ShowText": "Show Calculus III Notice", "HideText": "Hide Calculus III Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down"},
  "NoteDE": { "ShowText": "Show Diff. Eqns. Notice", "HideText": "Hide Diff. Eqns. Notice", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Answer": { "ShowText": "Show Answer", "HideText": "Hide Answer", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Solution": { "ShowText": "Show Solution", "HideText": "Hide Solution", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "SolutionDiscuss": { "ShowText": "Show Discussion", "HideText": "Hide Discussion", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step": { "ShowText": "Show Step", "HideText": "Hide Step", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step1": { "ShowText": "Start Solution", "HideText": "Hide Solution", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step2": { "ShowText": "Show Step 2", "HideText": "Hide Step 2", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step3": { "ShowText": "Show Step 3", "HideText": "Hide Step 3", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step4": { "ShowText": "Show Step 4", "HideText": "Hide Step 4", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step5": { "ShowText": "Show Step 5", "HideText": "Hide Step 5", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step6": { "ShowText": "Show Step 6", "HideText": "Hide Step 6", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step7": { "ShowText": "Show Step 7", "HideText": "Hide Step 7", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step8": { "ShowText": "Show Step 8", "HideText": "Hide Step 8", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "Step9": { "ShowText": "Show Step 9", "HideText": "Hide Step 9", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" },
  "StepAS": { "ShowText": "Show Alternate Solution", "HideText": "Hide Alternate Solution", "ShowImg": "fa-caret-right", "HideImg": "fa-caret-down" }
};

var MobileWidth = 900;


// jQuery code
$(document).ready(function () {
  
  // Show/Hide specific element
  // Using "*" here instead of span or i or whatever to catch all of them
  $("*[id^='SHLink']").on({
    "mouseenter": function () {
      var link = this;
      var linkID = link.id;
      
      if (linkID.indexOf("Note") !== -1) {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      } else {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      }
    },
    "mouseleave": function () {
      var link = this;
      var linkID = link.id;

      if (linkID.indexOf("Note") !== -1) {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      } else {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      }
    },
    "click": function () {
      var linkID = this.id;
      var d = new Date();
      var pubDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();  // getMonth returns 0 - 11
      //
      // Link id's assumed to be of form SHLink_XXX and this returns XXX
      //
      var objID = linkID.substring(7, linkID.length);

      // Do the actual show/hide and change text/image as needed...
      if (linkID.indexOf("Note") !== -1) {
        ShowHide(objID, null, true, pubDate);
      }
      else {
        ShowHide(objID);
      }
      
    }
  });

  // Show/Hide all elements of a particular type
  // Using "*" here instead of span or i or whatever to catch all of them
  $("*[id^='SHALink']").on({
    "mouseenter": function () {
      var link = this;
      var linkID = link.id;

      if (linkID.indexOf("Note") !== -1) {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      } else {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      }
    },
    "mouseleave": function () {
      var link = this;
      var linkID = link.id;

      if (linkID.indexOf("Note") !== -1) {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      } else {
        $(link).toggleClass("SH-Link SH-Link-Hover");
      }
    },
    "click": function () {
      var link = this;
      var linkID = link.id;
      var useCookie = false;
      //
      // Link id's assumed to be of form SHALink_S_XXX or SHALink_H_XXX
      // and this returns XXX
      //
      var objID = linkID.substring(10, linkID.length);
      var objSubID;
      var obj;
      var linkText = $(link).html();
      var isShowing = false;

      // Determine what type of show/hide object we're dealing with...
      if (linkID.indexOf("Note") !== -1) {
        isShowing = linkText.indexOf("Show") === -1;
        useCookie = true;
      } else {
        isShowing = linkText.indexOf("Show") === -1;
      }
                  
      $("div[id*='" + objID + "']").each(function () {
        obj = this;
        divID = obj.id;
        objSubID = divID.substring(6, divID.length);
        
        ShowHide(objSubID, isShowing, useCookie);
      });
    }
  });


  // Deal with the download menu to register event with Google Analytics
  // Menu ID's will begin with "download_menu"" and URL page don't begin with "a_DURL_".....
  $("a[id^='download_menu_'], a[id*='a_DURL_'], a[id*='lbDownloadFile']").on({
    "click": function () {
      var link = this;
      var linkID = link.id;
      var isMenu = linkID.indexOf("download_menu_") !== -1;
      var isURLPage = linkID.indexOf("a_DURL_") !== -1;
      var dataPDF = $(link).attr("data-PDF");
      var dataPDF_parts;

      if (dataPDF !== undefined) {
        dataPDF_parts = dataPDF.split('$');
      } else {
        return;
      }

      if (dataPDF_parts.length === 4) {
        // This will add in an event...
        gtag('event', dataPDF_parts[0], { 'event_category': dataPDF_parts[1], 'event_label': dataPDF_parts[2] });

        // This will add in a page view for the pdf...
        gtag('config', 'UA-331594-1', { 'page_title': "PDF : " + dataPDF_parts[2], 'page_location': "http://tutorial.math.lamar.edu" + dataPDF_parts[3], 'page_path': dataPDF_parts[3] });
      }
    }
  });

  // To make it easier to see how folks are navigating the view solution links (i.e. menu or problem list page.)
  $("a[id='a_nav_menu_prev_problem'], a[id='a_nav_menu_next_problem'], a[class='practice-soln-link']").on({
    "click": function () {
      var link = this;
      var linkID = link.id;
      var linkURL = link.href;
      var linkURL_parts;
      var Soln_Class = "";
      var Soln_Section = "";
      var Soln_Problem = "";
      var isMenu = linkID.indexOf("a_nav_menu") !== -1;
      var Soln_Action = (isMenu) ? "View Solution - Menu" : " View Solutions - Problem List";

      if (linkURL !== undefined) {
        linkURL_parts = linkURL.split('/');
      } else {
        return;
      }

      if (linkURL_parts.length === 7) {

        Soln_Class = linkURL_parts[4];
        Soln_Section = linkURL_parts[5];
        Soln_Problem = linkURL_parts[6];
        Soln_Problem = "Problem " + Soln_Problem.substring(4, Soln_Problem.indexOf('.'));

        // This will add in an event...
        gtag('event', Soln_Action, { 'event_category': Soln_Class + " - " + Soln_Section, 'event_label': Soln_Problem });
      }
    }
  });

  // How are folks navigating the site? Side Menu, Top Menu, Breadcrumb, Intro Pages?
  $("a[id^='type_menu'], a[id^='view_menu'], a[id*='nav_menu'], a[id*='print_menu'], a[id^='breadcrumb'], a[class='indexpagelink'], a[class='introlink'], a[class='mm-link']").on({
    "click": function () {
      var link = this;
      var linkID = link.id;
      var linkURL = link.href;
      var linkClass = link.className;
      var linkText = link.innerText;
      var linkURL_parts;
      var Soln_Class = "";
      var Soln_Section = "";
      var Soln_Problem = "";
      var isView = linkID.indexOf("type_menu") !== -1 || linkID.indexOf("view_menu") !== -1;
      var isNav = linkID.indexOf("nav_menu") !== -1;
      var isBC = linkID.indexOf("breadcrumb") !== -1;
      var isIntroPage = linkClass === "introlink";
      var isIndexPage = linkClass === "indexpagelink";
      var isSide = linkClass === "mm-link";
      var isProblem = (linkID.indexOf("prev_problem") !== -1 || linkID.indexOf("next_problem") !== -1);
      var isPrint = linkID.indexOf("print_menu") !== -1;
      var isShowing = linkText.indexOf("Show") !== -1;
      var isHiding = linkText.indexOf("Hide") !== -1
      var isClasses = linkURL.indexOf("Classes") !== -1;
      var isAsgn = linkURL.indexOf("ProblemsNS") !== -1;
      var isPractice = linkURL.indexOf("Problems") !== -1 && !isAsgn;
      var isExtras = linkURL.indexOf("Extras") !== -1;
      var nav_Action = "";
      var nav_Category = "";
      var nav_Label = "";

      if (isProblem) {
        return;  // This is tracked above....
      }

      if (isClasses) {
        nav_Label = "Notes";
      } else if (isPractice) {
        nav_Label = "Practice";
      } else if (isAsgn) {
        nav_Label = "Assignment";
      } else if (isExtras) {
        nav_Label = "Extras";
      } else {
        nav_Label = "Top Level";
      }

      if (isView) {
        nav_Action = "View Menu";

        if (isShowing) {
          nav_Category = "Showing Solutions/Steps";
          nav_Label = "";
        } else if (isHiding) {
          nav_Category = "Hiding Solutions/Steps";
          nav_Label = "";
        } else {
          nav_Category = "Changing Type";
        }

      } else if (isNav || isSide || isBC || isIntroPage || isIndexPage) {
        nav_Action = "Site Navigation";

        if (isSide) {
          nav_Category = "Side Menu";          
        } else if (isBC) {
          nav_Category = "Breadcrumb";
        } else if (isIntroPage) {
          nav_Category = "Book/Chapter Intro Page";
        } else if (isIndexPage) {
          nav_Category = "Index Page";
        } else {
          nav_Category = "Top Menu";
        }

      } else if (isPrint) {
        nav_Action = "Print";
        nav_Label = "";

        if (isShowing) {
          nav_Category = "Show Solutions/Steps prior to printing";
        } else if (isHiding) {
          nav_Category = "Hide Solutions/Steps prior to printing";
        } else {
          nav_Category = "Print Only";
        }
      }

      if (nav_Action === "") {
        return;   // Something odd happened and we don't need/want to send an event...
      }

      // This will add in an event...
      gtag('event', nav_Action, { 'event_category': nav_Category, 'event_label': nav_Label });
    }
  });

  // Take care of the search icon
  $("#header-search-icon").on({
    "mouseenter": function () {
      var showImg = "fa-search";
      var hideImg = "fa-times";

      if ($("#search-icon").hasClass(showImg)) {
        $("#header-search-icon").toggleClass("header-menu-icon header-menu-icon-hover");
      }
    },
    "mouseleave": function () {
      var showImg = "fa-search";
      var hideImg = "fa-times";

      if ($("#search-icon").hasClass(showImg)) {
        $("#header-search-icon").toggleClass("header-menu-icon header-menu-icon-hover");
      }
    },
    "click": function () {
      var showImg = "fa-search";
      var hideImg = "fa-times";

      if ($("#search-icon").hasClass(showImg)) {
        $("#search-icon").toggleClass(showImg + " " + hideImg);
        $("#content-top-menu").hide();
        $("#header-google-search").show();
        $("#gsc-i-id1").focus();

        gtag('event', 'Site Search', { 'event_category': 'Show Search Box' });

        //if ($(window).width() < MobileWidth) {
        //  $("#mobile-title").css("opacity", "0");
        //}
      } else {
        $("#search-icon").toggleClass(showImg + " " + hideImg);
        $("#header-google-search").hide();
        $("#content-top-menu").show();

        gtag('event', 'Site Search', { 'event_category': 'Hide Search Box' });

        //if ($(window).width() < MobileWidth) {
        //  $("#mobile-title").css("opacity", "1");
        //}
      }
    }
  });

  // Make sure the practice problems links stay visible...
  var links_offset = $('#nav_links').offset();
  var nav_bar_height = 50;
  var windowHeight = $(window).height();
  var docHeight = $(document).height();
  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    // Stops flickering when scrolling to bottom of page.... 
    if (scrollTop + windowHeight === getDocHeight()) {
      return;
    }

    if (links_offset !== undefined && links_offset.top < scrollTop + nav_bar_height) {
      $('#nav_links').addClass('top-nav-bar-fixed');
    } else {
      $('#nav_links').removeClass('top-nav-bar-fixed');
    }
  });


  $("#menu").mmenu({
    "iconPanels": true,
    navbar: {
      title: 'Pauls Notes'
    },
    navbars: [
      {
        position: 'top',
        content: ['searchfield']
      }, {
        position: 'top',
        content: ['breadcrumbs', 'close']
      }
    ],
    extensions: [
      "pagedim-black"
    ]
  });
});

// Get doc height.  Should (hopefully) work on any browser...
function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
}


// The page initialization code...
function init(NotesOptions)
{
  if (arguments === 0) {
    NotesOptions = "";
  }

  var allOptions;
  var partsOptions;
  var forceShowHide = null;
  var hideable;
  var cookieShow;
  var cookieDate;
  var isMobile;
  var showMobile;
  var noteDateParts;
  var pubDate;
  var newPubDate;

  var numNotesShowing = 0;

  // Let's see what options we have to take care of....
  if (NotesOptions.Notes !== undefined) {
    allOptions = NotesOptions.Notes.split(',');

    for (var i = 0; i < allOptions.length; i++) {
      partsOptions = allOptions[i].split(';');

      //hideable = partsOptions[2] == "true";
      hideable = partsOptions[2];

      // The mobile option in the css was overriding the stuff here so eliminated that
      // and am doing the check here so the cookie option will be followed.
      isMobile = partsOptions[0].indexOf("Mobile") !== -1;
      showMobile = $(window).width() < MobileWidth; 

      // Snag the Show cookie and see what it has to say...
      cookieShow = GetCookie(partsOptions[0] + "Show");
      if (cookieShow !== null && hideable) {

        if (isMobile && !showMobile)
        {
          forceShowHide = true;
        }
        else 
        {
          forceShowHide = cookieShow === "false";
        }
      }
      else if (!hideable)
      {
        // The note is not hideable (assignment most likely) so force it to show
        forceShowHide = false;
      }
      else {
        // This is the first time the note has been shown so the note should force the note to show
        forceShowHide = false;
      }

      // See if the Date cookie exists and if so do we need to override the show settings above to show a new note.
      cookieDate = GetCookie(partsOptions[0] + "PubDate");
      if (cookieDate !== null)
      {
        noteDateParts = cookieDate.split('/');
        if (noteDateParts.length !== 3) {
          break;
        }
        pubDate = new Date(noteDateParts[2], noteDateParts[0], noteDateParts[1]);

        noteDateParts = partsOptions[1].split('/');
        if (noteDateParts.length !== 3) {
          break;
        }
        newPubDate = new Date(noteDateParts[2], noteDateParts[0], noteDateParts[1]);
        
        if (newPubDate > pubDate)
        {
          // This is a new note and so override any cookie settings to make sure it shows.
          forceShowHide = false;
        }

      }

      ShowHide(partsOptions[0], forceShowHide, true, partsOptions[1]);

      numNotesShowing += $("#SHLink_" + partsOptions[0]).is(':hidden') ? 0 : 1;
    }
  }
  //else if (NotesOptions.pdf !== undefined)
  //{
    // We need to load up a pdf file....
  //  location.href = NotesOptions.pdf;
  //}

  // Show the Show All/Hide All links if more than one note is showing....
  if (numNotesShowing > 1)
  {
    $("#SHALink_S_Note").show();
    $("#SHALink_H_Note").show();
  }
  else
  {
    $("#SHALink_S_Note").hide();
    $("#SHALink_H_Note").hide();
  } 

  var loc = location.href;
  var isContact = loc.toUpperCase().indexOf("CONTACT.ASPX") !== -1 || loc.toUpperCase().indexOf("CONFIRM.ASPX") !== -1;

  if (!isContact) {
    SetCookie("visitor", "LV");
  }

}

// Show or Hide a div as well as change text and image if needed.
function ShowHide(objID, forceShowHide, useCookie, notePublishDate) {

  if (arguments.length === 1) {
    forceShowHide = null;           // null - ignore, true - force to hide, false - force to show
    useCookie = false;
    notePublishDate = "";           // In order to use this it is assumed there is also a publish date cookie
  } else if (arguments.length === 2) {
    useCookie = false;
    notePublishDate = "";
  } else if (arguments.length === 3) {
    notePublishDate = "";
  }

  var linkID = "#SHLink_" + objID;
  var imgID = "#SHImg_" + objID;
  var divID = "#SHObj_" + objID;
  var linkText = $(linkID).html();
  var isShowing;
  var objInfo;
  var ImgClass;
  
  if (objID.indexOf("Note") !== -1) {
    objInfo = SHInfo[objID] !== undefined ? SHInfo[objID] : SHInfo["Default"];
  } else if (objID.indexOf("Help") !== -1) {
    objInfo = SHInfo["Answer"];
  } else if (objID.indexOf("DSoln") !== -1) {
    objInfo = SHInfo["SolutionDiscuss"];
  } else if (objID.indexOf("Soln") !== -1) {
    objInfo = SHInfo["Solution"]; 
  } else if (objID.indexOf("StepAS") !== -1) {
    objInfo = SHInfo["StepAS"];
  } else if (objID.indexOf("Step") !== -1) {
    if (objID.indexOf("1") !== -1) {
      objInfo = SHInfo["Step1"];
    } else if (objID.indexOf("2") !== -1) {
      objInfo = SHInfo["Step2"];
    } else if (objID.indexOf("3") !== -1) {
      objInfo = SHInfo["Step3"];
    } else if (objID.indexOf("4") !== -1) {
      objInfo = SHInfo["Step4"];
    } else if (objID.indexOf("5") !== -1) {
      objInfo = SHInfo["Step5"];
    } else if (objID.indexOf("6") !== -1) {
      objInfo = SHInfo["Step6"];
    } else if (objID.indexOf("7") !== -1) {
      objInfo = SHInfo["Step7"];
    } else if (objID.indexOf("8") !== -1) {
      objInfo = SHInfo["Step8"];
    } else if (objID.indexOf("9") !== -1) {
      objInfo = SHInfo["Step9"];
    } else {
      objInfo = SHInfo["Step"];
    }

    
  } else {
    objInfo = SHInfo["Default"];
  }
  ImgClass = objInfo.ShowImg + " " + objInfo.HideImg;
  
  // If there is no linkText then either we have a note that can't be hidden (i.e. Assignment)
  // or something like the Mobile note that won't always be showing.  In these cases just gracefully exit.
  if (linkText === undefined || $(linkID).is(':hidden')) {
    // However before we exist make sure to show if the linkText is undefined (i.e. can't be hidden)
    if (linkText === undefined) {
      $(divID).show();
    }
    return;
  }

  // Determine if we're going to force a show all or a hide all
  isShowing = forceShowHide === null ? linkText.indexOf("Show") !== -1 || linkText.indexOf("Start") !== -1 : !forceShowHide;
  
  // If the text and/or image object doesn't exist this will gracefully fail....
  if (isShowing) {
    // Only do this if we're toggling a single item (forceShow == null) or if the item 
    // is hidden and we're forcing all to show (forceShow != null (i.e. false) )
    if (forceShowHide === null || (forceShowHide !== null && $(imgID).hasClass(objInfo.ShowImg))) {
      $(linkID).text(objInfo.HideText);
      $(imgID).toggleClass(ImgClass);
      $(divID).show(); 
    }

    if (useCookie) {
      SetCookie(objID + "Show", true, 365);
      if (notePublishDate !== "") {
        SetCookie(objID + "PubDate", notePublishDate, 365);
      }
    }
  } else {
    // Only do this if we're toggling a single item (forceShow == null) or if the item 
    // is showing and we're forcing all to hide (forceShow != null (i.e. true)
    if (forceShowHide === null || (forceShowHide !== null && $(imgID).hasClass(objInfo.HideImg))) {
      $(linkID).text(objInfo.ShowText);
      $(imgID).toggleClass(ImgClass);
      $(divID).hide(); 
    }

    if (useCookie) {
      SetCookie(objID + "Show", false, 365);
      if (notePublishDate !== "") {
        SetCookie(objID + "PubDate", notePublishDate, 365);
      }
    }
  }
}

function SHPrintPage(sh, prt) {
  if (arguments.length === 0) {
    sh = -1;
    prt = 1;
  } else if (arguments.length === 1) {
    prt = 0;
  }

  var obj;
  var divID;
  var objSubID;
  var isShowing = false;

  if (sh === -1) {
    window.print();
  } else if (sh === 0 || sh === 1) {

    $("div[id*='Soln'], div[id*='Step']").each(function () {
      obj = this;
      divID = obj.id;
      objSubID = divID.substring(6, divID.length);

      isShowing = sh === 0;

      ShowHide(objSubID, isShowing, false);
    });

    if (prt == 1) {
      window.print();
    }
  }
}

function SetCookie(name, value, days) {
  var expires = "";
  var date;
  if (days) {
     date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function GetCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  var c;
  for (var i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function DeleteCookie(name) {
  createCookie(name, "", -1);
}
