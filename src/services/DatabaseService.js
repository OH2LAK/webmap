class DatabaseService {
    constructor(databaseUrl) {
        this.databaseUrl = databaseUrl;
    }

    async fetchLayerData(layerId) {
        try {
            const response = await fetch(`${this.databaseUrl}/layers/${layerId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching layer data:', error);
            throw error;
        }
    }

    async saveObject(objectData) {
        try {
            const response = await fetch(`${this.databaseUrl}/objects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(objectData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error saving object:', error);
            throw error;
        }
    }

    async getObjectDescription(objectId) {
        try {
            const response = await fetch(`${this.databaseUrl}/objects/${objectId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching object description:', error);
            throw error;
        }
    }

    async getSymbols() {
        try {
            const response = await fetch(`${this.databaseUrl}/symbols`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching symbols:', error);
            throw error;
        }
    }
}

export default DatabaseService;