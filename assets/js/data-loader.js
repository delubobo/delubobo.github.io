/* ==========================================================================
   DATA LOADER - Portfolio Data Management
   ========================================================================== */

class PortfolioDataLoader {
    constructor() {
        this.data = null;
        this.dataUrl = 'assets/data/portfolio.json';
    }

    /**
     * Load portfolio data from JSON file
     * @returns {Promise<Object>} Portfolio data object
     */
    async loadData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            throw error;
        }
    }

    /**
     * Get specific section of portfolio data
     * @param {string} section - Section name (e.g., 'profile', 'projects')
     * @returns {*} Section data
     */
    getSection(section) {
        if (!this.data) {
            console.warn('Data not loaded yet. Call loadData() first.');
            return null;
        }
        return this.data[section];
    }

    /**
     * Get all portfolio data
     * @returns {Object|null} Complete portfolio data
     */
    getAllData() {
        return this.data;
    }
}

// Create global instance
window.portfolioDataLoader = new PortfolioDataLoader();
