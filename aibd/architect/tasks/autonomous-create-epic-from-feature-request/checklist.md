# Autonomous Create Epic from Feature Request Checklist

This checklist serves as a comprehensive validation framework for autonomous agents executing the epic creation task. The agent should systematically work through each item to ensure the generated epic is complete, well-structured, and aligned with the feature request requirements.

## 1. FEATURE REQUEST ANALYSIS

### 1.1 Feature Request Understanding

- [ ] Core objectives and goals are clearly identified
- [ ] Target users and stakeholders are identified
- [ ] Business value and impact are understood
- [ ] Success criteria are extracted from the request

### 1.2 Requirements Extraction

- [ ] Functional requirements are identified and documented
- [ ] Non-functional requirements are captured
- [ ] Technical constraints are identified
- [ ] Integration requirements are noted

### 1.3 Scope Definition

- [ ] Feature boundaries are clearly defined
- [ ] Out-of-scope items are identified
- [ ] Dependencies on other features are noted
- [ ] Assumptions are documented

## 2. PROJECT DISCOVERY & ANALYSIS

### 2.1 Documentation Review

- [ ] System architecture documentation has been reviewed
- [ ] API documentation has been analyzed
- [ ] Previous epic and story patterns have been identified

### 2.2 Source Code Analysis

- [ ] Existing components and modules have been identified
- [ ] Code patterns and conventions have been observed
- [ ] Integration points have been mapped
- [ ] Technical debt and constraints have been noted

### 2.3 Related Functionality Mapping

- [ ] Existing functionalities related to the request are listed
- [ ] Components that may be affected are identified
- [ ] APIs or interfaces requiring modification are noted
- [ ] Dependencies that may be impacted are documented

## 3. EPIC STRUCTURE & CONTENT

### 3.1 Epic Template Compliance

- [ ] Epic follows the specified template format exactly
- [ ] Goal statement is concise (1-2 sentences) and clear
- [ ] Template placeholders have been replaced with actual content

### 3.2 Epic Goal Definition

- [ ] Goal clearly states the primary objective
- [ ] Goal describes the value to be delivered
- [ ] Goal is measurable and specific
- [ ] Goal aligns with the feature request intent

### 3.3 Epic Content Quality

- [ ] Technical approach is clearly outlined
- [ ] Business value is articulated
- [ ] Success metrics are defined

## 4. USER STORY GENERATION

### 4.1 Story Structure & Format

- [ ] All stories follow "As a... I want... so that..." format
- [ ] User roles are specific and appropriate
- [ ] Actions/goals are clear and actionable
- [ ] Benefits/reasons are meaningful and valuable

### 4.2 Story Completeness

- [ ] All necessary stories for the epic are included
- [ ] No critical user journeys are missing
- [ ] Edge cases are covered with appropriate stories
- [ ] Error scenarios are addressed

### 4.3 Story Quality

- [ ] Each story represents a single, cohesive piece of functionality
- [ ] Stories are independently valuable
- [ ] Stories are testable and verifiable
- [ ] Stories avoid technical implementation details

## 5. ACCEPTANCE CRITERIA

### 5.1 Criteria Completeness

- [ ] Each story has comprehensive acceptance criteria
- [ ] All functional requirements are covered
- [ ] Non-functional requirements are addressed
- [ ] Error conditions are specified

### 5.2 Criteria Quality

- [ ] Acceptance criteria are specific and measurable
- [ ] Criteria use clear, unambiguous language
- [ ] Criteria are testable and verifiable
- [ ] Criteria avoid implementation details

## 6. STORY SEQUENCING & DEPENDENCIES

### 6.1 Logical Sequence

- [ ] Stories are ordered in logical implementation sequence
- [ ] Dependencies between stories are identified
- [ ] Implementation order supports incremental delivery
- [ ] Sequence enables early value delivery

### 6.2 Dependency Analysis

- [ ] Direct prerequisite stories are identified
- [ ] Cross-story dependencies are documented
- [ ] External dependencies are noted
- [ ] Parallel development opportunities are identified

### 6.3 Implementation Strategy

- [ ] Rationale for story sequence is documented
- [ ] Key dependencies are explained
- [ ] Risk mitigation through sequencing is considered

## 7. TECHNICAL CONSIDERATIONS

### 7.1 Technical Feasibility

- [ ] Technical approach for each story is viable
- [ ] Required technologies and tools are identified
- [ ] Technical constraints are addressed
- [ ] Integration challenges are considered

### 7.2 Architecture Alignment

- [ ] Epic aligns with existing system architecture
- [ ] New components fit within current design patterns
- [ ] API design considerations are addressed
- [ ] Security requirements are integrated

### 7.3 Implementation Requirements

- [ ] Technical requirements are clearly documented
- [ ] Infrastructure needs are identified
- [ ] Third-party service requirements are noted

## 8. FILE CREATION & OUTPUT

### 8.1 Epic File Generation

- [ ] Epic file is saved to correct location: `/workspace/docs/epics/epic-[NUMBER].md`
- [ ] File follows template format exactly
- [ ] File content is complete and well-formatted

### 8.2 Task Report Generation

- [ ] Task report is created using the specified template (task-report.template.md)
- [ ] Task report template placeholders are properly replaced
- [ ] Task report accurately reflects the created epic content
- [ ] Task report includes implementation details discovered

### 8.3 File Updates

- [ ] Relevant existing files are identified for updates
- [ ] Updates are made to impacted documentation
- [ ] Cross-references are updated where necessary

## 9. QUALITY ASSURANCE

### 9.1 Content Validation

- [ ] All epic content is accurate and complete
- [ ] No placeholder text remains in output
- [ ] Technical terminology is used correctly
- [ ] Content is consistent throughout

### 9.2 Format Validation

- [ ] Template structure is maintained
- [ ] Numbering and references are accurate
- [ ] Links and cross-references work properly

### 9.3 Completeness Check

- [ ] All required deliverables are created
- [ ] All template requirements are satisfied
- [ ] Output meets specified quality standards

## 10. AUTONOMOUS OPERATION VALIDATION

### 10.1 Independence Verification

- [ ] Task completed without user interaction
- [ ] All decisions made autonomously
- [ ] Process followed documented guidelines

### 10.2 Decision Documentation

- [ ] Key decisions are documented with rationale
- [ ] Alternative approaches considered are noted
- [ ] Assumptions are clearly stated

### 10.3 Process Compliance

- [ ] All phases of the task were completed
- [ ] Guidelines were followed systematically
- [ ] Quality standards were maintained
