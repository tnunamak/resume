'use strict';

// MD5 (Message-Digest Algorithm) by WebToolkit
var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};

angular.module('resumeApp')
  .controller('MainCtrl', function ($scope) {
    var size = 150;
    var email = 'tim@timnunamaker.com';
    $scope.resume = {
      firstName: 'Tim',
      lastName: 'Nunamaker',
      email: email,
      avatar: 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size,
      website: 'dondochaka.dyndns.org/tech-radar',
      phone: '210 · 281 · 1280',
      twitter: 'tnunamak',
      linkedIn: 'tnunamak',
      summary: "I'm a developer in San Antonio with a background in full-stack Java web development. My expertise mostly revolves around Java but I have recently begun leaning more into JavaScript and tooling for it.",
      experiences: [{
        title: 'Senior Developer',
        company: 'HEB Grocery',
        start: '3/13',
        end: null,
        current: true,
        summary: 'I am currently working on projects to improve the general capabilities of our development teams:',
        technologies: ['Java', 'Spring', 'Gradle', 'AngularJS'],
        responsibilities: "* **Rebuilt a large multi-project build process** with 20 interdependent modules. I designed and built a Gradle plugin for Oracle ATG E-commerce projects centered around mapping Gradle sub-projects to ATG modules. Performance  of the build reduced from a 10-45 minute execution time in Ant to 10 seconds-2 minutes in the rewrite.\r\n\r\n* **Bootstrapping AngularJS**. I wrote a proof-of-concept app on a modern JavaScript stack with Yeoman and centered around AngularJS. It demos unit testing Angular controllers and services, token based-authentication, and encapsulating heavy customizations to HTML via directives. This PoC effort started the current conversation about whether AngularJS and the single-page app paradigm has a place as a standard technology.\r\n\r\n* **Managing the transition process from CVS to Git**, including documentation, a support team, and training for project teams. This was identified as a necessary but unwieldy obstacle that I signed up for. Now in the pilot phase, new teams are requesting support from me on a daily basis.\r\n\r\n* **Bringing code reviews to the masses**. Implementing the peer code review process that I found success in trialing by catching bugs and bad code on a daily basis (see accounting project below)."
      },{
        title: 'Developer',
        company: 'Contract and Side Jobs',
        start: '6/12',
        end: null,
        current: true,
        summary: '',
        technologies: ['Android', 'AngularJS'],
        responsibilities: "* **Shipping Android**: I am leading a team, for fun and learning, through building an Android app for generating drink recommendations. When the core features on the Kanban board are complete we will release it for public use and tailor future releases to user wants. (6\/13 - present) \r\n\r\n* **Built a single-page app with AngularJS\/Bootstrap\/PHP**: this lightweight product was for a customer to sell to realty service providers. Realtors gain access to videos of residential areas, accessed through the Vimeo API, for sharing with home-buyers. I worked on the AngularJS\/Bootstrap front-end in a small team under contract. (3\/13 - 2 months)\r\n\r\n* **Developed an apartment tenant-screening product** for a client to sell as a service. This Spring MVC app enabled leasing agents to run background checks on potential tenants. As one of two developers, my focus was on integrating with TransUnion and BDS services to look up applicant criminal and credit history, converting many shapes of XML, read over a socket, into useful Java objects. (6\/12 - 5 months)"
      },{
        title: 'Developer',
        company: 'HEB Grocery',
        start: '9/10',
        end: '2/13',
        current: false,
        summary: '',
        technologies: ['Java', 'Spring', 'jQuery', 'ATG', 'Gradle', 'SQL', 'ORM'],
        responsibilities: "* Led applications developers in building a financial transaction portal for 40k retail vendors\r\n\r\n    * **Wrote a reusable Java adapter** for the jQuery DataTables plugin server-side pagination interface. My decision to manage pagination server-side turned out to be a crucial part of delivering an application with a comfortable user experience.\r\n\r\n    * **Developed a mechanism for automatically handling server-side Java bean validation (JSR-303) errors** by serializing error messages as JSON.\r\n\r\n   * **Wrote a DSL in Groovy** for generating code for a set of FAQ questions.\r\n\r\n   * **Designed and developed large portions of the core UI functionality**, a dynamic, search-driven table view. The table consisted of summary-level records that expanded to show other tables and more detailed information about the invoice, bill, etc.\r\n\r\n   * **Wrote a mechanism for exporting a .csv file of user search results**. This required logic for showing summary or detailed information, combining datatypes (e.g., export a detailed table of bills or a summary or detailed table of \"records\" to include bills, checks, etc.).\r\n\r\n   * **Challenged the team to modernize beyond Struts and server-managed views**. I directed and participated in scaffolding of the JQuery-driven AJAX client and Spring MVC, local MySQLand SOAP-client backend, to be built via Gradle.\r\n\r\n   * **Pushed for agile and a strong UI**. Short of an analyst or designer, we tackled UI wireframes, requirements scoping and continually revised estimates with planning poker. I managed user stories and technical tasks in JIRA with velocity tracking and oversaw daily per-commit code reviews.\r\n  * I made this a **unit-testing-first** project with JUnit, Mockito and PowerMock\r\n\r\n* Led application developers in building a customer loyalty account management website (3 separate retail programs). This was **an E-commerce framework Oracle ATG project** extension of the company\'s primary customer app (HEB.com). I developed user account management and program registration pages whose content was backed by customized ATG content repository templates. This involved configuring the ATG ORM and dependency-injection-managed service layer.\r\n\r\n* **Team lead for front-end components of a project archetype**. This was a short project to consolidate common preferences, architecture patterns, and standard technologies into a starter-project. It experienced a high level of success and I continued to operate as a lead maintainer.\r\n\r\n* Influenced adoption of a number of process improvements (project retrospectives, velocity tracking, unit testing), technologies and tooling (Gradle, IntelliJ IDEA)\r\n* Active team-building through facilitating one-day coding challenges, book discussion groups and mentoring developers"
      },{
        title: 'Developer',
        company: 'HEB Grocery',
        start: '9/10',
        end: '2/13',
        current: false,
        summary: '',
        technologies: ['Java', 'Spring', 'jQuery', 'ATG', 'Gradle', 'SQL', 'ORM'],
        responsibilities: "* **Built retail item quality assurance tracker**. Responsible for item searching functionality, implemented in Struts 1.2\/JSP\/JDBC.\r\n* **Developed content managed vendor document portal**, also in Struts. Responsible for content administration features for document listings. Cooperatively designed and implemented site UI.\r\n\r\n* **Developed bakery listing, customer-facing web pages** (front-end) with DSP tag library in ATG E-commerce framework\r\n\r\n* Sun Certified Java Professional (SCJP) certification"
      }],
      educations: [{
        degree: 'B.S. Computer Science, B.S. Engineering, B.A. Mathematics',
        institution: 'Trinity University',
        start: '2004',
        end: '2009',
        courses: ['Algorithms', 'Data Structures', 'Theoretical Computer Science', 'Functional Programming', 'Scientific Programming', 'Mechatronics', 'Microcontrollers'],
        gpas: {'Overall': '3.38', 'Computer Science': '3.54'},
        achievements: "* Honors in Computer Science ([Thesis: Cycles in Metabolic Networks](http:\/\/digitalcommons.trinity.edu\/compsci_honors\/25\/))  \r\n* Received Meritorious award (top 13%) for international 2009 COMAP math modeling competition\r\n* David Swalm scholarship awarded for Engineering, 2008  \r\n* HHMI-funded for math and biology summer research, 2007. See aforementioned thesis.\r\n* Engineering program was multidisciplinary, with a strong emphasis on design"
      }],
      projects: [{
        name: 'Technology Radar',
        start: '7/13',
        end: null,
        current: true,
        technologies: ['AngularJS', 'D3.js'],
        homepage: "http://github.com/tnunamak/tech-radar",
        description: "[The radar](http:\/\/www.thoughtworks.com\/insights) is a diagram that groups tools, techniques, languages\/frameworks and platforms into the categories adopt, trial, assess and hold. This implementation is intended to help developers, teams or organizations maintain a visual map of their toolbox.\r\n\r\nThe application currently utilizes D3 to render the diagram from a data structure that contains all of the technologies. Users can add and remove technologies and changes are cached in the browser\'s local storage. I will soon connect it to a RESTful backend to manage user data in a mongo database.",
        contribution: "This is a personal, open project that I maintain."
      }]
    };
  });
