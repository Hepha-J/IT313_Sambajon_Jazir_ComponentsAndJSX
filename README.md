# IT313 Laboratory 4 - Student Roster Card Renderer

## Problem Overview
This React Native application renders a dynamic roster of enrolled students. Each student is presented inside a styled card displaying their name, course, and units enrolled, with a conditional "Full Load" badge.

## Component Architecture
- **`StudentCard`**: Functional component accepting `name`, `course`, `units`, and `isFullLoad` as destructured props.
- **`StudentRoster`**: Parent component rendering the student list using `.map()`, displaying total count via `{studentList.length}`, and managing state for key reconciliation testing.

## Key Experiment: Array Index vs. Unique ID Keys
When list elements are reordered (e.g., reversed), using array indices as `key` props forces React to map state and DOM elements by index position rather than element identity. Using unique IDs (`student.id`) ensures accurate reconciliation during dynamic updates.

## How to Run
1. Install dependencies:
   ```bash
   npm install