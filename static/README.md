# Static Folder

This is a folder holding static assets.  This is typically `/public` in Create React App application or Next.js applications, and often is `/static` in other frontend frameworks.

The purpose of this folder within a zero-knowledge dApp context is to hold the `.wasm` file generated out from the proving scheme as well as the verification key as a `.zkey` file.  This is also a spot to keep inputs, such as identity commitments or other circuit inputs, that can be used for testing the soundness of circuits and within Solidity test files working with the zero-knowledge proof.  The frontend client application will need to leverage these files at runtime to create proofs, so it is important that these files are available via a folder like this.
