# Autonomous Implement Next Story Task

## Objective

Implement the next story task by reading the story requirements, implementing all functionality according to acceptance criteria, and ensuring code quality standards are met. This task is designed for an autonomous agent that operates independently without user interactions.

**IMPORTANT: The agent MUST return the completed task report as the final result of this task.**

## Prerequisites

- Story template: `/workspace/aibd/architect/templates/story.template.md`
- Task checklist: `/workspace/aibd/developer/tasks/autonomous-implement-next-story-task/checklist.md`
- Task report template: `/workspace/aibd/developer/tasks/autonomous-implement-next-story-task/task-report.template.md`

## Task Instructions

### Phase 1: Story Analysis and Preparation

The agent **MUST** perform the following preparation steps:

1. **Identify Next Story**: The agent **MUST**:

   - Locate the next story task in `/workspace/docs/stories/` with status 'Draft' or 'Approved'
   - Read and understand the complete story file including all sections
   - Extract all acceptance criteria and technical requirements
   - Review the task breakdown and technical guidance provided

2. **Analyze Technical Context**: The agent **MUST**:

   - Review project documentation referenced in the story
   - Understand the architectural patterns and coding standards
   - Identify all files that need to be created or modified
   - Understand integration points with existing system components

3. **Validate Prerequisites**: The agent **MUST**:
   - Ensure all story dependencies are met
   - Verify that required tools and environment are available
   - Confirm understanding of all acceptance criteria

### Phase 2: Implementation

The agent **MUST** implement the story requirements:

1. **Code Implementation**: The agent **MUST**:

   - Implement all functional requirements specified in the story
   - Follow the technical guidance provided in the story
   - Adhere to project coding standards and architectural patterns
   - Ensure proper error handling and input validation
   - Apply security best practices (no hardcoded secrets, proper validation)

2. **Quality Assurance**: The agent **MUST** run and pass all quality checks:

   - TypeScript compilation: `pnpm typecheck`
   - Linting: `pnpm lint`
   - Circular dependency check: `pnpm madge`
   - All tests: `pnpm test`
   - Fix any errors or warnings that arise

3. **Code Documentation**: The agent **MUST**:
   - Add appropriate code comments for complex logic
   - Add inline documentation (JSDoc, TSDoc) for new functions and classes
   - Ensure code is self-documenting with clear variable and function names

### Phase 3: Validation and Completion

The agent **MUST** complete the following validation tasks:

1. **Functional Verification**: The agent **MUST**:

   - Manually verify that all acceptance criteria are met
   - Test edge cases and error conditions
   - Ensure integration with existing system works correctly
   - Validate that all story tasks are completed

2. **Story Administration**: The agent **MUST**:

   - Mark all tasks within the story file as complete
   - Update story status to 'Done'
   - Document any development decisions or clarifications in the story file
   - Complete the story wrap-up section with relevant notes

3. **Validate with Checklist**: The agent **MUST** go through the checklist `/workspace/aibd/developer/tasks/autonomous-implement-next-story-task/checklist.md` to validate all work before generating the task report.

4. **Generate Task Report**: The agent **MUST** create a task report using the template `/workspace/aibd/developer/tasks/autonomous-implement-next-story-task/task-report.template.md` following these instructions:

   - **Story Number**: Use the actual story number (e.g., "Story 1.2", "Story 2.1", etc.)
   - **Story Title**: Use the exact title from the implemented story
   - **Changes Made**: List all specific changes with file names and functions
   - **Quality Checks**: Document all QA checks performed and their results
   - **Requirements Met**: Show how each acceptance criteria was satisfied
   - **File Path**: Reference the story file path using pattern `/workspace/docs/stories/story-{epicNum}.{storyNum}.md`

   **The agent MUST return this completed task report as the final output/result of the task.**

## Autonomous Decision Making

The agent **MUST** make decisions independently regarding:

- Implementation approach and technical solutions
- Code organization and structure within project standards
- Error handling strategies and edge case management
- Testing approach and verification methods

## Deliverables

The agent **MUST** provide:

- Complete implementation of all story requirements
- Updated story file with 'Done' status and completion notes
- All quality checks passed successfully
- **Completed task report using the specified template format (RETURNED AS FINAL RESULT)**

## Quality Standards

- All acceptance criteria **MUST** be implemented and verified
- Code **MUST** pass all quality checks (typecheck, lint, madge, test)
- Implementation **MUST** follow project coding standards and architecture
- Error handling **MUST** be robust and user-friendly
- Code documentation **MUST** be complete for complex logic and new functions
- Story administration **MUST** be completed with proper status updates
- **Task report **MUST** accurately reflect all implementation work and be returned as the final result**

## Final Output Requirement

**The agent MUST complete this task by returning the filled-out task report template as the final result. The task report serves as the official completion confirmation and summary of all work performed.**
