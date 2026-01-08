# PROMPT FOR GENERATING/UPDATING docs/LECTURE_STEPS.md

**Goal:** Create or update the `docs/LECTURE_STEPS.md` file following a strict hierarchical structure, focusing on three distinct types of Tables of Contents (TOC) to ensure maximum navigability and educational clarity. This file serves as educational content for the project and TypeScript.

---

## 🛠 GENERAL TABLE OF CONTENTS RULES
- Each TOC must provide detailed navigation using markdown internal links.
- Link format: `[Text](#lowercase-anchor-with-hyphens)`.
- Maintain consistent bullet point indentation.
- Every heading in the document must be reachable via a link in at least one TOC.
- Entries must be clickable markdown links that navigate to the corresponding Section, Lecture, Context, Code Update, or TODO heading.

---

## 📋 THE THREE TYPES OF TOC CONFIGURATION

### 1. Project Table of Contents (Global)
Located at the beginning of the document, immediately after the initial "Project Overview". It must list only the major project components and sections.
- **Expected Format:**
  - [👨🏾‍💻 Project: Name](#-project-name)
    - [📋 Project Overview](#-project-overview)
      - [What This Project Does](#what-this-project-does)
      - [Technology Stack](#technology-stack)
      - [Key Components](#key-components)
    - [📑 Table of Contents](#-table-of-contents)
    - [📁 Visual Project Tree](#-visual-project-tree)
    - [🧳 Section 01: Title](#-section-01-title)
    - [🧳 Section 02: Title](#-section-02-title)
- *Note: Continue the list for all existing `🧳 Section XX` headers.*

### 2. Section Table of Contents
Located at the start of each major section (`## 🧳 Section XX`). It must list all the lectures/lessons contained within that specific section.
- **Expected Format:**
  - [📑 Table of Contents](#-table-of-contents-N)
      - [📚 Lecture 001: Title](#-lecture-001-title)
      - [📚 Lecture 002: Title](#-lecture-002-title)
- *Note: Replace `N` with the appropriate index if there are multiple TOCs in the file.*

### 3. Lecture Table of Contents (Detail Level)
Located at the beginning of each Lecture/Lesson. It breaks down the internal structure of the lecture.
- **Mandatory Bullet List Structure:**
    - **First item:** Current lecture name with a self-link (e.g., `[Lecture 001: Title](#lecture-001-title)`).
    - **Subsequent items:**
        - `[XX.1 Context](#xx1-context)`
        - `[XX.2 Updating code according the context](#xx2-updating-code-according-the-context)`
            - **Nested under XX.2:** List sub-sections like `[XX.2.1 Subtopic](#xx21-subtopic)`, `[XX.2.2 Another Subtopic](#xx22-another-subtopic)`. For headers like `### 🧠 01.1 Context`, use `#-011-context`.
        - `[XX.3 Pending Fixes (TODO)](#xx3-pending-fixes-todo)`
- **Constraint:** Consolidate any issues or todo items under **XX.3 Pending Fixes**. No separate "Issues" or "XX.4" sections.

---

## 🏗 DOCUMENT CONTENT STRUCTURE

### Main Title
- Use emoji `👨🏾‍💻` and the project name or section number.

### Project Overview
Detailed high-level description with the following subsections:
- **What This Project Does**: List key features and capabilities using bullet points.
- **Technology Stack**: List all technologies used (Node.js, React, Next.js, TypeScript, etc.).
- **Key Components**: Describe main classes, modules, or architectural layers.

### Visual Project Tree
- ASCII tree representation of the directory hierarchy.
- Use `📁` for folders and `📄` for files.
- Include comments explaining the purpose of key files/directories.

### Section Headers
- Use `## 🧳 Section XX: Title`. Repeat the main title pattern if applicable.

### Lecture Structure
Each lecture must follow this exact sequence:
1.  **Lecture TOC** (Type 3).
2.  **📚 Lecture XXX: [Title]**
3.  **🧠 XX.1 Context**: 
    - Purpose, motivation, and solution approach.
    - Describe the problem this lecture solves.
    - Provide necessary technical background information.
4.  **⚙️ XX.2 Updating code according the context**:
    - Numbered subsections (XX.2.1, XX.2.2).
    - Show incremental changes and complete working examples.
    - Include test implementations and assertions where applicable.
    - Display expected results/outputs (bash blocks for console, JSON for APIs).
5.  **🧱 XX.3 Pending Fixes (TODO)**: 
    - Markdown checklist of technical debt, improvements, or enhancement suggestions.
    - Format as: `- [ ] Description`.

---

## 💻 CODE BLOCK FORMATTING

### TypeScript Code Blocks
- Use triple backticks with `ts` language tag.
- Include file path comment as the first line: `/* path/to/file.ts */`.
- Mark important changes or new logic with: `// 👈🏽 ✅ (number)`.
- Use `// ♻️` for deprecated or replaced code.
- Include comments explaining complex logic or specific implementation details.

### Test & Results Formatting
- **Test Code**: Show complete test implementations including imports.
- **Expected Results**: Use `bash` code blocks for console output, test pass/fail indicators, or formatted JSON responses.
- **Change Markers**: Ensure progressive numbering of changes throughout the lecture.

---

## 🎨 EMOJI AND FORMATTING GUIDELINES
- `👨🏾‍💻`: Project Main Title
- `🧳`: Section Title
- `📚`: Lecture Title
- `🧠`: Context Section
- `⚙️`: Code Update Section
- `🧱`: TODO Section
- `📋`: Overview
- `📑`: Table of Contents
- `📁`: Directory
- `📄`: File
- `🚀`: Code Examples / Execution Outputs
- `🔐`: Authentication / Security related
- `✅`: Successful changes
- `// ♻️`: Replaced/Deprecated code

---

## 🛠 TECHNICAL & SPECIFIC REQUIREMENTS
1.  **Completeness**: All code blocks must be complete and runnable. No placeholders.
2.  **File Paths**: Always include file path comments in code blocks.
3.  **Change Markers**: Use `// 👈🏽 ✅ (number)` for all new changes.
4.  **Educational Focus**: Explain the "why" (Context) before the "what" (Code).
5.  **Progressive Learning**: Each lecture should build logically on the previous ones.
6.  **Images**: Reference images in `img/` directory when available: `![Description](../img/image.png)`.
7.  **Early Returns**: Use early returns and descriptive naming in code examples.
8.  **DRY Principle**: Maintain clean, reusable code snippets.
9.  **Accessibility**: When relevant, include accessibility features (aria-labels, etc.).
10. **Final Validation**: Every heading must be reachable via the TOC links.

---

## 📤 OUTPUT FORMAT
The final generated document must:
- Be in English (unless specified otherwise).
- Use consistent emoji patterns.
- Have proper markdown formatting (headers, bold, lists).
- Include all requested code examples and expected results.
- Follow the exact structure defined in this prompt.
