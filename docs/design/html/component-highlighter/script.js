// --- Component Highlighter Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create and inject the highlighter's HTML structure
    const highlighterHTML = `
        <div id="component-viewer-toggle" title="Toggle Component Highlights" style="position: fixed; bottom: 20px; right: 20px; z-index: 10000; background: #000000; color: white; padding: 10px; border-radius: 50%; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: background-color 0.3s ease;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3a2 2 0 0 0-2 2v2"></path><path d="M19 3a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path><rect width="18" height="10" x="3" y="7" rx="2"></rect></svg>
        </div>
        <div id="component-viewer-popup" class="component-viewer-popup">
            <div class="component-viewer-header">
                <h3>Components on this page</h3>
                <button id="component-viewer-close" title="Close">&times;</button>
            </div>
            <div class="component-viewer-controls">
                <input type="checkbox" id="select-all-components">
                <label for="select-all-components">Select All</label>
            </div>
            <ul id="component-viewer-list" class="component-viewer-list"></ul>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', highlighterHTML);

    // 2. Get references to the newly created elements
    const toggleButton = document.getElementById('component-viewer-toggle');
    const popup = document.getElementById('component-viewer-popup');
    const closeButton = document.getElementById('component-viewer-close');
    const componentList = document.getElementById('component-viewer-list');
    const selectAllCheckbox = document.getElementById('select-all-components');

    if (!toggleButton || !popup || !closeButton || !componentList || !selectAllCheckbox) {
        console.error('Component highlighter UI elements could not be created.');
        return;
    }

    let isPopupOpen = false;

    // 3. Dynamically build the component tree from the DOM
    function buildTreeFromDOM() {
        const tree = {};
        const nodes = {}; // Helper to quickly find nodes in the tree

        document.querySelectorAll('[data-component]').forEach(element => {
            const name = element.dataset.component;

            // Skip if we've already placed this component type in the tree
            if (nodes[name]) {
                return;
            }

            const parentEl = element.parentElement.closest('[data-component]');

            if (parentEl) {
                const parentName = parentEl.dataset.component;
                const parentNode = nodes[parentName];
                
                // Ensure the parent is already in the tree before adding a child
                if (parentNode) {
                    parentNode[name] = {};
                    nodes[name] = parentNode[name];
                }
            } else {
                // This is a root-level component
                tree[name] = {};
                nodes[name] = tree[name];
            }
        });
        return tree;
    }
    
    // 4. Find all unique components and populate the list, respecting the tree structure
    const componentTree = buildTreeFromDOM();
    const componentsOnPage = new Set(Array.from(document.querySelectorAll('[data-component]')).map(el => el.dataset.component));

    function buildComponentList(tree, level) {
        Object.keys(tree).sort().forEach(name => {
            if (componentsOnPage.has(name)) {
                const listItem = document.createElement('li');
                listItem.classList.add(`level-${level}`);
                listItem.innerHTML = `
                    <input type="checkbox" id="comp-check-${name}" data-component-name="${name}" class="component-checkbox">
                    <label for="comp-check-${name}">${name}</label>
                `;
                componentList.appendChild(listItem);
                
                if (tree[name] && Object.keys(tree[name]).length > 0) {
                    buildComponentList(tree[name], level + 1);
                }
            }
        });
    }

    buildComponentList(componentTree, 0);

    // 5. Toggle popup visibility
    toggleButton.addEventListener('click', () => {
        isPopupOpen = !isPopupOpen;
        popup.style.display = isPopupOpen ? 'block' : 'none';
        toggleButton.style.background = isPopupOpen ? '#888888' : '#000000';
    });

    closeButton.addEventListener('click', () => {
        isPopupOpen = false;
        popup.style.display = 'none';
        toggleButton.style.background = '#000000';
    });

    // 6. Handle highlighting on checkbox change
    componentList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const componentName = e.target.dataset.componentName;
            const shouldHighlight = e.target.checked;
            
            highlightComponent(componentName, shouldHighlight);
        }
    });

    // 7. Handle "Select All" checkbox
    selectAllCheckbox.addEventListener('change', (e) => {
        const shouldSelectAll = e.target.checked;
        const allCheckboxes = componentList.querySelectorAll('.component-checkbox');
        
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = shouldSelectAll;
            highlightComponent(checkbox.dataset.componentName, shouldSelectAll);
        });
    });

    function highlightComponent(name, highlight) {
        const elementsToHighlight = document.querySelectorAll(`[data-component="${name}"]`);
        elementsToHighlight.forEach(el => {
            el.classList.toggle('is-highlighted', highlight);
        });
    }
});
// --- End Component Highlighter Logic --- 