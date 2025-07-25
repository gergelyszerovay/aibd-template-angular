# Autonomous Create Next Story Task Checklist

This checklist serves as a validation framework for autonomous agents executing the story creation task. The agent should systematically work through each item to ensure the generated story is complete, well-structured, and implementation-ready.

## 1. STORY IDENTIFICATION & VALIDATION

- [ ] Highest-numbered story file has been identified
- [ ] Last story status has been verified as 'Done' (or ERROR returned)
- [ ] Next logical story identified based on epic definitions
- [ ] Story prerequisites are met according to epic file
- [ ] Story number and title extracted correctly from epic

## 2. STORY CONTENT & STRUCTURE

- [ ] Story follows proper user story format ("As a... I want... so that...")
- [ ] Story goal/purpose is clearly stated
- [ ] Relationship to epic goals is evident
- [ ] Business context and value are clear
- [ ] Story status set to 'Draft' initially

## 3. ACCEPTANCE CRITERIA

- [ ] All acceptance criteria from epic are included
- [ ] Acceptance criteria are specific and testable
- [ ] Criteria are refined based on technical context gathered
- [ ] Edge cases and error scenarios are addressed
- [ ] Success criteria are clearly defined

## 4. TECHNICAL IMPLEMENTATION GUIDANCE

- [ ] Key files to create/modify are identified
- [ ] Critical APIs or interfaces are described
- [ ] Necessary data models or structures are referenced
- [ ] Required technologies are mentioned
- [ ] Any exceptions to standard patterns are noted

## 5. TASK BREAKDOWN

- [ ] Tasks are detailed and sequential
- [ ] Tasks are linked to acceptance criteria where applicable
- [ ] Task breakdown is informed by gathered technical context
- [ ] Tasks provide clear implementation steps
- [ ] Dependencies between tasks are identified

## 6. REFERENCE & CONTEXT

- [ ] References point to specific relevant sections
- [ ] Critical information is summarized (not just referenced)
- [ ] Context explains why references are relevant
- [ ] Project structure alignment is verified
- [ ] Technical context synthesis is comprehensive

## 7. DOCUMENTATION UPDATES

- [ ] Affected PRDs and project documentation identified
- [ ] Documentation updates made to ensure alignment
- [ ] All data structure and interface changes documented
- [ ] API documentation updated for new or modified endpoints
- [ ] Data model documentation updated for schema changes
- [ ] **Blueprint verification completed for any updated feature-level PRDs:**
  - [ ] Blueprint identified from PRD's "Based on:" line
  - [ ] Corresponding blueprint template located at `/workspace/aibd/blueprints/[blueprint-name]/feature-level-prd.template.md`
  - [ ] PRD structure verified against blueprint template
  - [ ] Corresponding blueprint checklist located at `/workspace/aibd/blueprints/[blueprint-name]/feature-level-prd.checklist.md`
  - [ ] PRD validated against all blueprint checklist items
  - [ ] Any checklist failures corrected in the PRD
  - [ ] Final PRD complies with all blueprint requirements
- [ ] All technical details provided so developer needs no additional research
- [ ] Cross-references maintained consistently

## 8. DOCUMENTATION TRACKING

- [ ] "Documentation Updates" section completed in story file
- [ ] All modified documentation files listed with file paths
- [ ] Brief description provided for changes made to each file
- [ ] API documentation changes specifically documented
- [ ] Data model changes specifically documented
- [ ] **Blueprint verification results documented for any updated feature-level PRDs**
- [ ] Documentation tracking is complete and accurate

## 9. FILE CREATION & OUTPUT

- [ ] Story file saved to correct location: `/workspace/docs/stories/story-{epicNum}.{storyNum}.md`
- [ ] File follows story template format
- [ ] File content is complete and well-formatted
- [ ] All template sections are properly filled

## 10. TASK REPORT GENERATION

- [ ] Task report created using specified template
- [ ] Task report accurately reflects created story content
- [ ] Story number and title correctly referenced
- [ ] Implementation details and context summarized

## 11. QUALITY ASSURANCE

- [ ] All story content is accurate and complete
- [ ] No placeholder text remains in output
- [ ] Technical terminology is used correctly
- [ ] Content is consistent throughout
- [ ] Story is implementation-ready for developer agent
