// Web Worker to run Storybook in the background
self.onmessage = async () => {
  try {
    const { exec } = await import('child_process');
    exec('npm run storybook', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting Storybook: ${error}`);
        return;
      }
      console.log(stdout);
    });
  } catch (error) {
    console.error('Failed to start Storybook:', error);
  }
};