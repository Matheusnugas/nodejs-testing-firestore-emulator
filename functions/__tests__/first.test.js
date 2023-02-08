const {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} = require("@firebase/rules-unit-testing");

const {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} = require("firebase/firestore");

const projectId = "nugas-testing-projects";

describe("tests firebase", () => {
  beforeEach(async () => {
    const testEnv = await initializeTestEnvironment({
      projectId: projectId,
      firestore: {
        host: "127.0.0.1",
        port: "8080",
      },
    });
    await testEnv.clearFirestore();
  });

  afterEach(async () => {
    const testEnv = await initializeTestEnvironment({
      projectId: projectId,
      firestore: {
        host: "127.0.0.1",
        port: "8080",
      },
    });
    await testEnv.clearFirestore();
  });

  test("Test one", async () => {
    const testEnv = await initializeTestEnvironment({
      projectId: projectId,
      firestore: {
        host: "127.0.0.1",
        port: "8080",
      },
    });
    const alice = testEnv.unauthenticatedContext();
    const firestore = alice.firestore();
    await assertSucceeds(
      firestore.collection("cocozinho").add({ sexo: "cocozinho2" })
    );
    await alice.cleanup();
  });
});
