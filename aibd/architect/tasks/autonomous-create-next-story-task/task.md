# Autonomous Create Next Story Task

## Objective

Identify the next logical story based on project progress and epic definitions, then prepare a comprehensive, self-contained, and actionable story file. This task is designed for an autonomous agent that operates independently without user interactions.

**IMPORTANT: The agent MUST return the completed task report as the final result of this task.**

## Prerequisites

- Story template: `/workspace/aibd/architect/templates/story.template.md`
- Task checklist: `/workspace/aibd/architect/tasks/autonomous-create-next-story-task/checklist.md`
- Task report template: `/workspace/aibd/architect/tasks/autonomous-create-next-story-task/task-report.template.md`

## Task Instructions

### Phase 1: Discovery and Analysis

The agent **MUST** perform the following discovery steps:

1. **Explore Project Documentation**: The agent **MUST** examine existing project documentation using `/workspace/docs/index.md` as the primary guide to discover all relevant documentation.

2. **Analyze Epic and Story Files**: The agent **MUST** review:

   - All Epic files in `/workspace/docs/epics`
   - Existing story files in `/workspace/docs/stories`
   - Feature level PRDs in `/workspace/docs/feature-level-prd`

3. **Identify Technical Context**: The agent **MUST** gather technical context from:
   - Data Models Document (as referenced in Index Doc)
   - API Reference Document (as referenced in Index Doc)
   - UI/UX Specifications, Style Guides, Component Guides (if relevant)
   - Architecture documentation

### Phase 2: Story Identification and Preparation

The agent **MUST** autonomously identify and prepare the next story:

1. **Identify Next Story**: The agent **MUST**:

   - Review `/workspace/docs/stories/` to find the highest-numbered story file
   - Verify the last story's status is 'Done'
   - If the last story's status is not 'Done', return with ERROR: "Cannot create next story. Last story (story-{epicNum}.{storyNum}) has status '{current_status}' but must be 'Done' before proceeding."
   - Identify the next logical story based on epic definitions and prerequisites
   - If no suitable story is found, document blocking prerequisites

2. **Gather Story Requirements**: The agent **MUST**:

   - Extract exact title, goal/user story statement, and requirements from the Epic file
   - Collect all Acceptance Criteria (ACs) and predefined high-level tasks
   - Record original epic-defined scope for deviation analysis

3. **Synthesize Technical Context**: The agent **MUST**:
   - Collect all necessary technical details for implementation
   - Cross-reference with Project Structure Guide for alignment
   - Document any structural conflicts or clarifications needed

### Phase 3: File Creation and Validation

The agent **MUST** complete the following output tasks:

1. **Create Story File**: The agent **MUST** create `/workspace/docs/stories/story-{epicNum}.{storyNum}.md` using the story template with:

   - Story title and status (Draft)
   - Complete user story statement from epic
   - Refined acceptance criteria based on technical context
   - Comprehensive Dev Technical Guidance section
   - Detailed, sequential task breakdown

2. **Update Documentation**: The agent **MUST**:

   - Identify affected PRDs and project documentation in `/workspace/docs`
   - Update documents to ensure alignment with the new story
   - Document all data structure and interface changes in relevant docs
   - Update API documentation for any new or modified endpoints
   - Update data model documentation for schema changes
   - **Blueprint Verification for Feature-Level PRDs**: When updating any feature-level PRD in `/workspace/docs/feature-level-prd/`, the agent **MUST**:
     - Identify the blueprint specified in the PRD's "Based on:" line (e.g., "Based on: react-shadcn")
     - Locate the corresponding blueprint template at `/workspace/aibd/blueprints/[blueprint-name]/feature-level-prd.template.md`
     - Verify that the updated PRD follows the structure and format of its blueprint template
     - Locate the corresponding blueprint checklist at `/workspace/aibd/blueprints/[blueprint-name]/feature-level-prd.checklist.md`
     - Validate the updated PRD against all items in the blueprint checklist
     - If any checklist items fail, the agent **MUST** correct the PRD to meet all blueprint requirements
   - Ensure all technical details are documented so developer agent needs no additional research
   - **Track Documentation Updates**: In the story file's "Documentation Updates" section, the agent **MUST** list all documentation files that were modified during story creation, including:
     - File paths of all updated documentation
     - Brief description of changes made to each file
     - Specific API documentation changes
     - Specific data model changes
     - Blueprint verification results for any updated feature-level PRDs

3. **Validate with Checklist**: The agent **MUST** go through the checklist `/workspace/aibd/architect/tasks/autonomous-create-next-story-task/checklist.md` to validate all work before generating the task report.

4. **Generate Task Report**: The agent **MUST** create a task report using the template `/workspace/aibd/architect/tasks/autonomous-create-next-story-task/task-report.template.md` following these instructions:

   - **Story Number**: Use the actual story number (e.g., "Story 1.2", "Story 2.1", etc.)
   - **Story Title**: Use the exact title from the generated story
   - **Goal**: Provide a concise statement of what the story aims to achieve
   - **Key Components**: List main components created (technical guidance, tasks, acceptance criteria, etc.)
   - **Implementation Details**: List key technical requirements and context provided
   - **File Path**: Reference the correct story file path using pattern `/workspace/docs/stories/story-{epicNum}.{storyNum}.md`

   **The agent MUST return this completed task report as the final output/result of the task.**

## Autonomous Decision Making

The agent **MUST** make decisions independently regarding:

- Story identification and prioritization
- Risk assessment for incomplete prerequisites
- Technical context synthesis and relevance
- Documentation update scope and approach

## Deliverables

The agent **MUST** provide:

- Well-structured story file saved to the appropriate location
- Updated project documentation as necessary
- **Completed task report using the specified template format (RETURNED AS FINAL RESULT)**
- Documentation of any blocking prerequisites or risks identified

## Quality Standards

- All stories **MUST** include clear, actionable user story statements
- Acceptance criteria **MUST** be specific and testable
- Technical guidance **MUST** be comprehensive and implementation-ready
- Task breakdown **MUST** be sequential and detailed
- Documentation updates **MUST** maintain consistency across all affected files
- **Feature-level PRDs **MUST** comply with their corresponding blueprint template structure and pass all blueprint checklist items**
- Documentation tracking **MUST** be complete and accurate in the story file
- **Task report **MUST** accurately reflect the created story content and be returned as the final result**

## Final Output Requirement

**The agent MUST complete this task by returning the filled-out task report template as the final result. The task report serves as the official completion confirmation and summary of all work performed.**
