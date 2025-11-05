/**
 * Verification script for stats animation fix
 * Tests that all the necessary pieces are in place
 */

const fs = require('fs');

console.log('=== Stats Animation Fix Verification ===\n');

let errors = 0;
let warnings = 0;

// Test 1: Check main.js for window.app export
console.log('Test 1: Checking if app instance is exported...');
const mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
if (mainJs.includes('window.app = app')) {
    console.log('✓ PASS: window.app is exported\n');
} else {
    console.log('✗ FAIL: window.app export not found\n');
    errors++;
}

// Test 2: Check main.js for refreshObservers method
console.log('Test 2: Checking for refreshObservers() method...');
if (mainJs.includes('refreshObservers()') && mainJs.includes('this.observeElements()')) {
    console.log('✓ PASS: refreshObservers() method exists\n');
} else {
    console.log('✗ FAIL: refreshObservers() method not found\n');
    errors++;
}

// Test 3: Check main.js for observer storage
console.log('Test 3: Checking if observer is stored as instance variable...');
if (mainJs.includes('this.observer = observer')) {
    console.log('✓ PASS: Observer is stored\n');
} else {
    console.log('✗ FAIL: Observer storage not found\n');
    errors++;
}

// Test 4: Check main.js for observeElements method
console.log('Test 4: Checking for observeElements() method...');
if (mainJs.includes('observeElements()') && mainJs.includes('.stat-box')) {
    console.log('✓ PASS: observeElements() method exists and watches .stat-box\n');
} else {
    console.log('✗ FAIL: observeElements() method incomplete\n');
    errors++;
}

// Test 5: Check index.html for refreshObservers call
console.log('Test 5: Checking if index.html calls refreshObservers()...');
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('refreshObservers()')) {
    console.log('✓ PASS: refreshObservers() is called in index.html\n');
} else {
    console.log('✗ FAIL: refreshObservers() call not found in index.html\n');
    errors++;
}

// Test 6: Check components.js renderStats method
console.log('Test 6: Checking renderStats() creates correct structure...');
const componentsJs = fs.readFileSync('assets/js/components.js', 'utf8');
if (componentsJs.includes('stat-box') &&
    componentsJs.includes('stat-number') &&
    componentsJs.includes('data-target') &&
    componentsJs.includes('data-suffix')) {
    console.log('✓ PASS: renderStats() creates proper data attributes\n');
} else {
    console.log('✗ FAIL: renderStats() missing required attributes\n');
    errors++;
}

// Test 7: Check for animateStatNumber function
console.log('Test 7: Checking for animateStatNumber() function...');
if (mainJs.includes('animateStatNumber') &&
    mainJs.includes('data-target') &&
    mainJs.includes('updateNumber')) {
    console.log('✓ PASS: animateStatNumber() function exists\n');
} else {
    console.log('✗ FAIL: animateStatNumber() function incomplete\n');
    errors++;
}

// Test 8: Check portfolio.json for stats data
console.log('Test 8: Checking portfolio.json for stats data...');
const portfolioData = JSON.parse(fs.readFileSync('assets/data/portfolio.json', 'utf8'));
if (portfolioData.stats && Array.isArray(portfolioData.stats) && portfolioData.stats.length > 0) {
    console.log(`✓ PASS: Found ${portfolioData.stats.length} stats in portfolio.json`);

    // Check each stat has required fields
    let allStatsValid = true;
    portfolioData.stats.forEach((stat, i) => {
        if (!stat.value || !stat.label) {
            console.log(`  ⚠ WARNING: Stat ${i} missing value or label`);
            allStatsValid = false;
            warnings++;
        }
    });
    if (allStatsValid) {
        console.log('  ✓ All stats have required fields');
    }
    console.log('');
} else {
    console.log('✗ FAIL: Stats data not found or invalid in portfolio.json\n');
    errors++;
}

// Test 9: Verify the initialization order
console.log('Test 9: Checking initialization order...');
const statsRenderIndex = indexHtml.indexOf('renderStats');
const refreshIndex = indexHtml.indexOf('refreshObservers');
if (refreshIndex > statsRenderIndex && statsRenderIndex > -1 && refreshIndex > -1) {
    console.log('✓ PASS: refreshObservers() called after renderStats()\n');
} else {
    console.log('✗ FAIL: Initialization order incorrect\n');
    errors++;
}

// Test 10: Check for IntersectionObserver usage
console.log('Test 10: Checking for IntersectionObserver...');
if (mainJs.includes('IntersectionObserver') && mainJs.includes('isIntersecting')) {
    console.log('✓ PASS: IntersectionObserver is used correctly\n');
} else {
    console.log('✗ FAIL: IntersectionObserver not properly configured\n');
    errors++;
}

// Summary
console.log('=== Verification Summary ===');
console.log(`Tests run: 10`);
console.log(`Passed: ${10 - errors}`);
console.log(`Failed: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors === 0) {
    console.log('\n✓ ALL TESTS PASSED! Stats animation fix is ready to commit.\n');
    process.exit(0);
} else {
    console.log('\n✗ TESTS FAILED! Please fix the errors before committing.\n');
    process.exit(1);
}
