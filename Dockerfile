FROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nRUN npm run build\nEXPOSE 3000\nCMD [\
npx\, \serve\, \-s\, \build\]
