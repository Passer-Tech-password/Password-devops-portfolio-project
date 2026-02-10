const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(process.cwd(), 'data.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

console.log('--- Diagnostic Report ---');
console.log(`Current Working Directory: ${process.cwd()}`);
console.log(`Data File Path: ${DATA_FILE}`);
console.log(`Uploads Directory: ${UPLOADS_DIR}`);

// 1. Check data.json
try {
    if (fs.existsSync(DATA_FILE)) {
        console.log('✅ data.json exists');
        try {
            const content = fs.readFileSync(DATA_FILE, 'utf-8');
            JSON.parse(content);
            console.log('✅ data.json is valid JSON');
        } catch (e) {
            console.error('❌ data.json is INVALID JSON:', e.message);
        }
        
        // Check write permission
        try {
            fs.accessSync(DATA_FILE, fs.constants.W_OK);
            console.log('✅ data.json is writable');
        } catch (e) {
            console.error('❌ data.json is NOT writable:', e.message);
        }
    } else {
        console.error('❌ data.json does NOT exist');
    }
} catch (e) {
    console.error('Error checking data.json:', e);
}

// 2. Check public/uploads
try {
    if (!fs.existsSync(UPLOADS_DIR)) {
        console.log('⚠️ public/uploads does not exist, attempting to create...');
        try {
            fs.mkdirSync(UPLOADS_DIR, { recursive: true });
            console.log('✅ public/uploads created successfully');
        } catch (e) {
            console.error('❌ Failed to create public/uploads:', e.message);
        }
    } else {
        console.log('✅ public/uploads exists');
        // Check write permission
        try {
            fs.accessSync(UPLOADS_DIR, fs.constants.W_OK);
            console.log('✅ public/uploads is writable');
        } catch (e) {
            console.error('❌ public/uploads is NOT writable:', e.message);
        }
    }

    // Try writing a test file to uploads
    const testFile = path.join(UPLOADS_DIR, 'test-write.txt');
    try {
        fs.writeFileSync(testFile, 'test');
        console.log('✅ Successfully wrote test file to public/uploads');
        fs.unlinkSync(testFile);
        console.log('✅ Successfully deleted test file from public/uploads');
    } catch (e) {
        console.error('❌ Failed to write to public/uploads:', e.message);
    }

} catch (e) {
    console.error('Error checking uploads directory:', e);
}

// 3. Test Atomic Write (simulation)
try {
    const tempFile = `${DATA_FILE}.tmp-test`;
    console.log(`Testing atomic write to ${tempFile}...`);
    fs.writeFileSync(tempFile, '{}');
    console.log('✅ Temp file created');
    fs.unlinkSync(tempFile);
    console.log('✅ Temp file deleted');
} catch (e) {
    console.error('❌ Atomic write simulation failed:', e.message);
}

console.log('--- End Report ---');
