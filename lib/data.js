import md5 from './md5'

const size = 150
const email = 'tim@timnunamaker.com'

export default {
  firstName: 'Tim',
  lastName: 'Nunamaker',
  email: email,
  avatar: 'http://www.gravatar.com/avatar/' + md5(email) + '.jpg?s=' + size,
  website: 'dondochaka.dyndns.org/tech-radar',
  phone: '210 · 281 · 1280',
  twitter: 'tnunamak',
  linkedIn: 'tnunamak',
  summary: "Currently in Austin making web applications with JavaScript",
  experiences: [{
    title: 'Software Engineer',
    company: 'Bazaarvoice',
    start: '8/13',
    end: null,
    current: true,
    summary: 'I develop and maintain the UI side of the customer configuration app',
    technologies: ['JavaScript', 'Backbone.js', 'AngularJS'],
    responsibilities: "* Building the latest version of the tool clients use to configure the product, e.g.:\r\n\r\n    * **Wrote a saving abstraction** that auto-throttles and batches changes, broadcasts events to subscribers\r\n\r\n    * **Built a route-oriented search** mechanism that loads and scrolls to your result\r\n\r\n    * **\"Unforked\" a core dependency** that took refactoring changes from [backbone-forms](https://github.com/powmedia/backbone-forms) into files that could be layered on top of the library, to make it upgradeable\r\n\r\n    * **Manage the Grunt build** that I wrote to build an optimized project artifact\r\n\r\n    * **Implemented a testing strategy** tied to the build process\r\n\r\n* **Built a customizable JSON editor** as a personal-turned-production project. Interactively browse through, add or remove nested properties. Supports special rendering rules for specific documents. Documents may have customized JSON property labels, property display filtering and embedded forms for editing changes."
  },{
    title: 'Senior Developer',
    company: 'HEB Grocery',
    start: '3/13',
    end: '8/13',
    current: false,
    summary: 'Worked on projects to improve the general capabilities of our development teams:',
    technologies: ['Java', 'Spring', 'Gradle', 'AngularJS'],
    responsibilities: "* **Rebuilt a large multi-project build process** with 20 interdependent modules. I designed and built a Gradle plugin for Oracle ATG E-commerce projects centered around mapping Gradle sub-projects to ATG modules. Performance  of the build reduced from a 10-45 minute execution time in Ant to 10 seconds-2 minutes in the rewrite.\r\n\r\n* **Bootstrapping AngularJS**. I wrote a proof-of-concept app on a modern JavaScript stack with Yeoman and centered around AngularJS. It demos unit testing Angular controllers and services, token based-authentication, and encapsulating heavy customizations to HTML via directives. This PoC effort started the conversation about whether AngularJS and the single-page app paradigm has a place as a standard technology.\r\n\r\n* **Managing the transition process from CVS to Git**, including documentation, a support team, and training for project teams. This was identified as a necessary but unwieldy obstacle that I signed up for.\r\n\r\n* **Bringing code reviews to the masses**. Implementing the peer code review process that I found success in trialing by catching bugs and bad code on a daily basis (see accounting project below)."
  },{
    title: 'Developer',
    company: 'Contract and Side Jobs',
    start: '6/12',
    end: '3/13',
    current: false,
    summary: '',
    technologies: ['Android', 'AngularJS'],
    responsibilities: "* **Shipping Android**: I led a team, for fun and learning, through building an Android app for generating drink recommendations. A functional MVP, only missing recipe data, is complete.\r\n\r\n* **Built a single-page app with AngularJS\/Bootstrap\/PHP**: this lightweight product was for a customer to sell to realty service providers. Realtors gain access to videos of residential areas, accessed through the Vimeo API, for sharing with home-buyers. I worked on the AngularJS\/Bootstrap front-end in a small team under contract. (3\/13 - 2 months)\r\n\r\n* **Developed an apartment tenant-screening product** for a client to sell as a service. This Spring MVC app enabled leasing agents to run background checks on potential tenants. As one of two developers, my focus was on integrating with TransUnion and BDS services to look up applicant criminal and credit history, converting many shapes of XML, read over a socket, into useful Java objects. (6\/12 - 5 months)"
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
      name: 'Robits',
      start: '6/14',
      end: '7/14',
      current: false,
      technologies: ['JavaScript', 'Phaser.io', 'Node.js', 'Socket.io'],
      homepage: "http://github.com/Atlas-/robits",
      description: "A multiplayer JavaScript game loosely based on the board game RoboRally. The outcome of a self-organized game jam."
  },{
    name: 'Technology Radar',
    start: '7/13',
    end: '7/13',
    current: false,
    technologies: ['AngularJS', 'D3.js'],
    homepage: "http://github.com/tnunamak/tech-radar",
    description: "[The radar](http:\/\/www.thoughtworks.com\/insights) is a diagram that groups tools, techniques, languages\/frameworks and platforms into the categories adopt, trial, assess and hold. This implementation is intended to help developers, teams or organizations maintain a visual map of their toolbox.\r\n\r\nThe application currently utilizes D3 to render the diagram from a data structure that contains all of the technologies. Users can add and remove technologies and changes are cached in the browser\'s local storage."
  }]
}
