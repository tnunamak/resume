import React from 'react'
import Remarkable from 'remarkable'

const md = new Remarkable()

/*
 React.createClass({
  render: function () {
    return <div className="row-fluid aboutMe">

  }
})
*/

const AboutMe = React.createClass({
  render: function () {
    return <div className="row-fluid aboutMe">
      <div className="span2 offset1">
        <img src={this.props.resume.avatar} className="img-polaroid avatar" />
      </div>
        <div className="span8">
          <div className="row-fluid">
            <div className="span8">
              <h1> { this.props.resume.firstName } { this.props.resume.lastName } </h1>

              <h3> { this.props.resume.experiences[0].title.toUpperCase() } </h3>  { /* todo capitalize */ }
            </div>
            <div className="span4">
              <span style={{ float: 'right', textAlign: 'right' }}>
                <a href={`mailto:${this.props.resume.email}`} target="_blank">{ this.props.resume.email }</a> <br /> { this.props.resume.phone } <br />
                    { /* this.props.resume.website */ }
              </span>
            </div>
          </div>
          <div className="row-fluid">
            <div className="span12">
              <p dangerouslySetInnerHTML={{ __html: md.render(this.props.resume.summary) }}></p>
            </div>
          </div>
        </div>
      </div>
    }
})

const Section = React.createClass({
  render: function () {
    return <div className="row-fluid" style={{paddingTop: '20px'}}>
      <div className="span2 offset1">
        <span style={{float: 'left'}}>
          <h3 className="into-margin"> {this.props.name.toUpperCase()} </h3>
        </span>
      </div>
      <div className="span8">
        {this.props.children}
      </div>
    </div>
  }
})

const Experiences = React.createClass({
  render: function () {
    const experiences = this.props.resume.experiences.map(experience => <Experience experience={experience} />)

    return <Section name='Experiences'>
      {experiences}
    </Section>
  }
})

const Experience = React.createClass({
  render: function () {
    const experience = this.props.experience
    const technologies = experience.technologies.map((technology) => <li>
      <h6><span ng-if="!$first" className="separator">·</span> { technology }</h6>
    </li>)

    return <div className="entry experience">
        <span className="pull-right"> { experience.start } - { experience.current ? 'current' : experience.end } </span>
        <h4> { experience.title } </h4>
        <ul className="tags pull-right">
          {technologies}
        </ul>
        <h5> { experience.company } </h5>

        <p dangerouslySetInnerHTML={{ __html: experience.summary}} />

        <p dangerouslySetInnerHTML={{ __html: md.render(experience.responsibilities)}}></p>
        <hr />
      </div>
  }
})

export default React.createClass({
  render: function () {
    const Separator = React.createClass({
    render: () => <div className="row-fluid">
      <div className="span10 offset1">
        <hr />
      </div>
    </div>
  })
    return <div>
      <AboutMe resume={this.props.resume} />
      <Separator />
      <Experiences resume={this.props.resume} />
      <Separator />
      <Educations resume={this.props.resume} />
      <Separator />
      <Projects resume={this.props.resume} />
    </div>
  }
})

const Education = React.createClass({
  render: function () {
console.log(this.props.education.gpas)
    const gpas = Object.keys(this.props.education.gpas).map(type => <span>
      <span ng-if="!$first">, </span>{ this.props.education.gpas[type] } ({ type })</span>)

    return <div className="entry education">
<span className="pull-right"> { this.props.education.start } - { this.props.education.current ? 'current' : this.props.education.end } </span>
            <h4> { this.props.education.degree } </h4>
            {/* <ul className="tags">
              <li ng-repeat="course in education.courses">
                <h6><span ng-if="!$first">·</span> {{ course }}</h6></li>
            </ul> */}
            <h5> { this.props.education.institution } </h5>
            GPA: {gpas}
            <p dangerouslySetInnerHTML={{__html: md.render(this.props.education.achievements)}}></p>
      </div>
  }
})

const Educations = React.createClass({
  render: function () {
    const educations = this.props.resume.educations.map(education => <Education education={education} />)

    return <Section name='Education'>
      {educations}
    </Section>
  }
})

const Projects = React.createClass({
  render: function () {
    const projects = this.props.resume.projects.map(project => <Project project={project} />)

    return <Section name='Projects'>
      {projects}
    </Section>
  }
})


const Project = React.createClass({
  render: function () {
    const technologies = this.props.project.technologies.map(technology => <li>
        <h6><span ng-if="!$first" className="separator">·</span> { this.props.technology }</h6>
      </li>)

    return <div className="entry project">
      <span className="pull-right"> { this.props.project.start } - { this.props.project.current ? 'current' : this.props.project.end } </span>

      <h4> { this.props.project.name } </h4>

      <ul className="tags pull-right">
        {technologies}
      </ul>

      {/* <h5> {{ project.tagLine }} </h5> */ }
      <h5><a href={ this.props.project.homepage } target="_blank">Project Homepage</a></h5>

      <p dangerouslySetInnerHTML={{__html: this.props.project.description}}></p>

      { this.props.project.contribution ? <h5 ng-show="project.contribution"> Contribution </h5> : null }

      <p dangerouslySetInnerHTML={{__html: this.props.project.contribution }}></p>
    </div>
  }
})
