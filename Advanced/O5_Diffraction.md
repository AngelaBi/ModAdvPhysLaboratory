# O-5 | Diffraction

Geometrical Optics say that light passing through a small hole should produce a hole-shaped spot on a distant screen. Wave optics, on the other hand, says the light will spread out in a process called *diffraction*, and that is in fact what's observed.

This lab is superficially similar to the Interference lab (O-6), but there are two key differences. First, the pattern you observe will be subtly different. Second, and more important, diffraction is observed with any light source while interference effects will only be observed when using either special light sources (like lasers) or thin surfaces (like oil films on water).

In this experiment, we will use the basic optics track, high precision diffraction slits, and a high sensitivity light sensor to investigate the diffraction of light.

*Figure 1: Optical setup for the diffraction experiment.*

![Figure 1](images/O5_Diffraction/setupID.jpg)

## Experimental Procedure

### General Setup

- ▷ The apparatus should already be setup and ready for use (see Figure 1). If there are any general difficulties please contact the lab technician or instructor.

### Verify the Software Settings

- The Rotary Motion Sensor and the Light Sensor should be plugged in.
- Click open the Hardware Setup button at the left of the screen. Click on the Rotary Motion Sensor icon. To the right of where it says Rotary Motion Sensor at the bottom of the Hardware Setup panel, click on the Gear icon. In the Linear accessory line, click on the white triangle and verify that it is set to "Rack & Pinion." Click the Hardware Setup button to close the screen when done.
- In Capstone, set the Common Sensor Sample Rate to $25\,\text{Hz}$.
- If necessary, create a graph of Relative Intensity vs. Distance.

1. Measure the distance between the slits (front of Slit Disk) and the screen. You can use the scale on the track, but it is easier and more accurate to use a meter stick. Record this in a spreadsheet.
2. Record the wavelength of the laser (printed on its case).
3. Turn out the room lights.
4. Observe the pattern on the screen as you rotate the Single Slit to each of its four positions ($0.16$, $0.08$, $0.04$, and $0.02\,\text{mm}$). How does the pattern change as you decrease the slit width? Take notes on these observations.

### Diffraction Procedure

1. Set the disk to the $0.02\,\text{mm}$ slit.
2. Move the Light Sensor so the Rotary Motion Sensor [RMS] is against the black stop block on the linear translator arm. If the positions are all negative when you start taking data, click on the Hardware Setup and click on the properties gear for the Rotary Motion Sensor and check "Change Sign."
3. Click on the RECORD button. Then slowly turn the RMS pulley to scan the pattern. Hold the rear of the RMS down against the linear translator bracket so it does not wobble up and down as it moves. Click on STOP when you have finished the scan. If you make a mistake, simply delete the run using the Delete Last Run button at bottom of screen and redo the scan. If the intensity maxes out (100%) at any point in the scan, change the gain setting on the light sensor and repeat the run.
4. When you've collected the data, click on Data Summary at the left of the screen. Double-click on Run #1 and re-label it "0.02 mm". Click Data Summary to close it.
5. Repeat the scan for the $0.04\,\text{mm}$ slit. Press the 0–100 button on the Light Sensor to reduce its sensitivity. When done, label the run "0.04 mm".
6. Repeat the scan for the other two remaining slits, saving the data as you go.

### Data Analysis

Now that you have the data, it's time to find the position of the intensity minima.

1. Select the "0.02 mm" Run.
   1. Click the Scale-to-Fit button on the graph toolbar.
   2. We need to expand the vertical scale to see the minimums more clearly. Click and drag the vertical scale to expand the scale. Continue until you can clearly see the $1^{st}$ minimums (nearest the central max).
   3. Click on the Coordinate Tool from the graph toolbar. Drag the crosshairs to the first minimum on the left. Right-click on the Coordinate Tool and select Show Delta. Drag the delta to the first minimum on the right. Record the delta width in a spreadsheet. Label this pair $m=1$.
   4. Repeat for the second pair of minimums (second-nearest to the central max), saving the $\Delta x$ and labelling it $m=2$.
   5. Continue on for as many pairs as your data allows.
2. Once you've finished the data table for the "0.02 mm" run, repeat the process and make another data table with $(m,\Delta x)$ pairs for each of the remaining runs.

   **Warning:** You must use the same order minimum on each side of the center peak. Count carefully!

3. What actually matters is not the distance, $\Delta x$, but the angle (using the center of the large middle peak to define the $\theta=0^\circ$ point). Use your measured distance from the slit to the screen and a bit of trigonometry to convert your distances to angles. Record the angles in your spreadsheet.

   *Be careful:* the angle you want is the angle from the center to the minimum. The distance you've measured, however, is from minimum to minimum, so you'll have to make some adjustments.

## Interpretation of Results

### Qualitative Observations

- Using your eyes, how does the single slit pattern change as you increase the slit size?
- How does the separation between the minima change as you vary the slit width? Does this agree with your previous answer?
- Before moving on to the final theory and analysis, describe the relationship between the slit size and the diffraction pattern. Are you able to discern the [quantitative] dependence?

### Quantitative Observations

You can think of the light coming out of each slit as a 1-D line of Huygen's wavelets. If the line were infinite, the result would be a cylindrical wave. In our experiment, however, the slit means the wavelets only cover a short line segment. This changes the pattern of the light you see and gives the rise to the bright and dark patterns you observed.

Formally, for a slit of width $a$ and a screen a distance $L$ from the slit, the intensity of the light we observe is given by the sum of all the Huygen's wavelets

$$
I(x) = \left| \vec{E}_0 \int_{-a/2}^{a/2} \frac{e^{ikr(x,x^\prime)}}{r(x,x^\prime)}\,dx^\prime \right|^2
$$

where $r(x,x^\prime)\equiv\sqrt{(x-x^\prime)^2+L^2}$ is the distance between the measurement point and the center of the slit. If $L$ is much bigger than the wavelength $\lambda$ (and for light that's almost always the case), then this equation can be simplified. We'll go over the details in lecture when we talk about diffraction, but the result will be a relationship between the angular position of the minima, the wavelength of the light, and the width of the slit

$$
\sin(\theta_m) = m\lambda / a
$$

*(1)*

where $a$ is the slit width and $m=\pm 1, \pm 2, \pm 3,\ldots$ is called the "order" of the minimum, and $\theta_m$ is the angle for that order minimum. There is no $m=0$ for diffraction; $m=\pm 1$ are the two minima closest to the central peak (the sign of $m$ determines the sign of the angle $\theta$), $m=\pm 2$ are the second-closest minima, and so on.

- ▷ Explain your qualitative observations above using Equation 1.
- ▷ What would you see if you performed this experiment using sunlight instead of a laser?
- ▷ According to the manufacturer, the uncertainty in the slit width is $\pm 0.005\,\text{mm}$, which is relatively large. Assuming the marked laser wavelength is correct, what are the true widths of your four slits?
- ▷ Using the corrected slit widths and the known laser wavelength, how well do your measured angles compare with the predicted angles? Do you notice any trends in your errors?

You will need your Diffraction data to complete the Interference lab. *Be sure to save your results and all recorded data and graphs before you change experiments.*
