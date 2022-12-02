# Introduction

To determine the self-inductance of an unknown coil. 

## Theory

  This bridge circuit measures an inductance by comparison with variable standard self inductance. The connections for balance condition is shown in Fig. 1.
<p align="center">

![Rm501 Figure](images/maxwellsimu.jpg)

***Fig 1: Circuit Diagram for Measurement of Self Inductance by Maxwell Bridge***
</p>

Let,
L<sub>1</sub>= Unknown self Inductance of resistance R<sub>1</sub>,

L<sub>2</sub>= variable inductance of fixed resistance r<sub>2</sub>,

R<sub>2</sub>= variable resistance connected in series with inductor L<sub>2</sub>,

R<sub>3</sub>,R<sub>4</sub>= known non inductive resistances,

At balance condition, 
<p align="center">
  
$$ (R_1 +j \omega L_1)*R_4 = (R_2 + r_2 + j \omega L_2)*R_3 ...(1) $$
  
<p>
Equating both the real and imaginary parts in eq.(1) and seperating them,

<p align="center">
  
$$ L_1 =(\frac{R_3}{R_4})L_2 ...(2) $$
 </p>
<p align="center">
  
$$ R_1 = (\frac{R_3}{R_4})*(R_2+r_2) ...(3) $$
  
 </p>

Resistors R<sub>3</sub> and R<sub>4</sub> are normally a selection of values from 10, 100, 1000 and 10,000 `Ω`. r<sub>2</sub> is a decade resistance box.

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
