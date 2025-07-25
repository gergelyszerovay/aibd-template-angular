# Autonomous Create Epic from Feature Request

## Objective

Transform a feature request into a well-structured epic with user stories following established templates and guidelines. This task is designed for an autonomous agent that operates independently without user interactions.

**IMPORTANT: The agent MUST return the completed task report as the final result of this task.**

## Prerequisites

- Epic template: `/workspace/aibd/architect/templates/epic.template.md`
- Task report template: `/workspace/aibd/architect/tasks/autonomous-create-epic-from-feature-request/task-report.template.md`
- Task checklist: `/workspace/aibd/architect/tasks/autonomous-create-epic-from-feature-request/checklist.md`

## Task Instructions

### Phase 1: Discovery and Analysis

The agent **MUST** perform the following discovery steps before creating or updating epics:

1. **Explore Project Documentation**: The agent **MUST** examine existing project documentation to understand the current system architecture and capabilities.

2. **Analyze Source Code**: The agent **MUST** review relevant source code to identify existing functionalities that are related to the requested changes.

3. **Identify Related Functionalities**: The agent **MUST** discover and list which existing functionalities are related to the requested changes, including:
   - Components that may be affected
   - APIs or interfaces that may need modification
   - Dependencies that may be impacted
   - Integration points that may require updates

### Phase 2: Autonomous Epic Creation

The agent **MUST** create epics autonomously without user interaction:

1. **Generate Epic Structure**: The agent **MUST** create epic titles, goal descriptions, and user stories based on the feature request analysis.

2. **Apply Template Format**: Each epic **MUST** follow the template format:

   - Epic number and title
   - Clear, concise goal statement (1-2 sentences)
   - Associated user stories with acceptance criteria

3. **Story Sequencing**: The agent **MUST** automatically:
   - Draft all necessary user stories for each epic
   - Analyze for logical sequence and dependencies
   - Identify prerequisite relationships between stories
   - Determine optimal implementation order

### Phase 3: File Creation and Summary

The agent **MUST** complete the following output tasks:

1. **Create Epic File**: The agent **MUST** save the generated epic to `/workspace/docs/epics/epic-[NUMBER].md` following the template format.

2. **Validate with Checklist**: The agent **MUST** go through the checklist `/workspace/aibd/architect/tasks/autonomous-create-epic-from-feature-request/checklist.md` to validate all work before generating the summary.

3. **Generate Task Report**: The agent **MUST** create a task report using the template `/workspace/aibd/architect/tasks/autonomous-create-epic-from-feature-request/task-report.template.md` following these instructions:

   - **Epic Number**: Use the actual epic number (e.g., "Epic 2", "Epic 3", etc.)
   - **Epic Title**: Use the exact title from the generated epic
   - **Goal**: Provide a concise, clear statement of what the epic aims to achieve
   - **Key Benefits**: List 2-4 main benefits, using bullet points with hyphens
   - **What's Included**: List 4 main components of the epic (user story, technical guidance, risk assessment, compatibility considerations)
   - **Implementation Details**: List 2-4 key technical requirements or changes needed
   - **File Path**: Always reference the correct epic file path using the pattern `/workspace/docs/epics/epic-[NUMBER].md`

   **The agent MUST return this completed task report as the final output/result of the task.**

4. **Update Existing Files**: The agent **MUST** update any relevant existing files that are impacted by the epic creation.

## Autonomous Decision Making

The agent **MUST** make decisions independently regarding:

- Epic scope and boundaries
- Story prioritization and sequencing
- Technical implementation approach
- Component integration strategies

## Deliverables

The agent **MUST** provide:

- Well-structured epic file(s) saved to the appropriate location
- **Completed task report using the specified template format (RETURNED AS FINAL RESULT)**
- Updated existing files as necessary
- Documentation of related existing functionalities

## Quality Standards

- All epics **MUST** include clear, measurable goals
- User stories **MUST** follow the "As a... I want... so that..." format
- Acceptance criteria **MUST** be specific and testable
- Dependencies **MUST** be clearly identified and documented
- **Task report **MUST** accurately reflect the created epic content and be returned as the final result**

## Final Output Requirement

**The agent MUST complete this task by returning the filled-out task report template as the final result. The task report serves as the official completion confirmation and summary of all work performed.**
