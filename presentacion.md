---
title: "Cuaternios"
subtitle: "Aplicación a gráficos por ordenador"
date: Álgebras, Grupos y Representaciones
institute: Universidad de Granada
author:
  - David Charte
  - Jose Carlos Entrena
  - Lothar Soto
  - Mario Román
shortauthor: D. Charte, J.C. Entrena, L. Soto, M. Román
mainfont: Fira Sans
theme: metropolis
colortheme: metropolis
lang: spanish
polyglossia-lang.name: spanish
graphics: true
classoption:
  - compress
header-includes:
- "\\RequirePackage[outputdir=out,cache=false]{minted}"
- \newcommand{\columnsbegin}{\begin{columns}}
- \newcommand{\columnsend}{\end{columns}}
- \definecolor{headbg}{RGB}{61, 96, 103}
- \definecolor{headfg}{RGB}{232, 239, 241}
- \setbeamercolor{headtitle}{fg=headfg,bg=headbg}
- \setbeamercolor{headnav}{fg=headfg,bg=headbg}
- \setbeamercolor{section in head/foot}{fg=headfg,bg=headbg}
- "\\defbeamertemplate*{headline}{miniframes theme no subsection}{
    \\begin{beamercolorbox}[ht=2.5ex,dp=1.125ex,
      leftskip=.3cm,rightskip=.3cm plus1fil]{headtitle}
      {\\usebeamerfont{title in head/foot}\\insertshorttitle}
      \\hfill
      \\leavevmode{\\usebeamerfont{author in head/foot}\\insertshortauthor}
    \\end{beamercolorbox}
    \\begin{beamercolorbox}[colsep=1.5pt]{upper separation line head}
    \\end{beamercolorbox}
    \\begin{beamercolorbox}{headnav}
      \\vskip2pt\\textsc{\\insertnavigation{\\paperwidth}}\\vskip2pt
    \\end{beamercolorbox}
    \\begin{beamercolorbox}[colsep=1.5pt]{lower separation line head}
    \\end{beamercolorbox}
  }"
- "\\makeatletter\\renewcommand{\\@metropolis@frametitlestrut}{
      \\vphantom{ÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()1234567890}
    }\\makeatother"
- "\\defbeamertemplate*{footline}{miniframes theme no subsection}{}"
- \beamertemplatenavigationsymbolsempty
---

# Grupo de rotación

## SO(3)

\begin{exampleblock}{Definición}
  Llamamos $O(n)$ al grupo de las \textbf{matrices ortogonales} reales
  de dimensiones $n \times n$ con la operación de composición; es
  decir,
  \[O(n) = \left\{ M \in GL(n) \mid MM^t=M^tM = I_n \right\}.\]
\end{exampleblock}

\begin{exampleblock}{Definición}
  Llamamos $SO(n)$ al \textbf{subgrupo de rotaciones}, definido como
  el subgrupo de $O(n)$ formado por aquellas matrices que tienen
  determinante $1$. Es decir,
  \[SO(n) = \left\{ M \in O(n) \mid \mathrm{det}(M)=1 \right\}.\]
\end{exampleblock}

## Ejes de rotación

\begin{exampleblock}{Proposición}
  Cada rotación de $SO(3)$ deja fija una recta.
\end{exampleblock}

\begin{exampleblock}{Proposición}
  Cada rotación de $SO(3)$ está determinada de manera única por un
  eje de rotación y un ángulo. Podemos notar así a cada rotación por
  $\mathbf{R}_{\alpha,u}$, donde $\alpha$ es el ángulo de rotación y $u$
  un vector unitario determinando el eje de rotación.
\end{exampleblock}

## Propiedades topológicas de las rotaciones

\begin{exampleblock}{Proposición}
  El grupo $SO(3)$, con la topología inducida desde la topología usual
  de las matrices, es homeomorfo al espacio proyectivo tridimensional
  $\mathbb{RP}^3$.
\end{exampleblock}

De este resultado se deduce que $SO(3)$ es \textit{conexo} y que tiene un grupo
fundamental no trivial, no siendo, por tanto, \textit{simplemente conexo}.

# Ángulos de Euler

## Definición

\begin{exampleblock}{Definición}
  Se conoce como sistema de los \textbf{ángulos de Euler} al que
  utiliza tres ángulos de rotación sobre los ejes cartesianos para
  describir la orientación de un objeto respecto a un sistema de
  coordenadas fijo en el espacio.
\end{exampleblock}

## Descomposición

\begin{equation*}
  \mathbf{R}_{\psi,z}
  \mathbf{R}_{\phi,y}
  \mathbf{R}_{\theta,x} =
\end{equation*}
\begin{equation*}
  \begin{pmatrix}
    \cos \psi & -\sin \psi & 0 \\
    \sin \psi & \cos \psi & 0 \\
    0 & 0 & 1
  \end{pmatrix}\begin{pmatrix}
      \cos \phi & 0 & \sin \phi \\
      0 & 1 & 0 \\
      -\sin \phi & 0 & \cos \phi
    \end{pmatrix}\begin{pmatrix}
    1 & 0 & 0 \\
    0 & \cos \theta & -\sin \theta \\
    0 & \sin \theta & \cos \theta
  \end{pmatrix}
\end{equation*}

## Propiedades topológicas

Podemos identificar el espacio de las rotaciones por ángulos de Euler con el 3-toro $\mathbb T^3$.

## Bloqueo del cardán

\columnsbegin
\column{0.5\textwidth}

\begin{figure}[ht!]
\centering
\includegraphics[width=\textwidth]{./img/cardan.jpg}
\caption{Bloqueo del cardán \label{figcardan}}
\end{figure}

\column{0.5\textwidth}

\begin{exampleblock}{Proposición}
  El bloqueo del cardán es inevitable si se representan rotaciones
  mediante ángulos de Euler. Específicamente, no existen funciones
  recubridoras entre el espacio de ángulos de Euler y el espacio de
  las rotaciones.
\end{exampleblock}

\columnsend

# Cuaternios

## Versores

\columnsbegin
\column{0.5\textwidth}
$$\mathbb{H} = \mathbb{R} \oplus V,$$
$$V = \left\{ v \in \mathbb{H} \mid v^2 < 0 \right\}.$$

Consideramos los \textbf{cuaternios unitarios}, $q\in\mathbb H : \|q\| = qq^\ast = 1$.

\column{0.5\textwidth}

\begin{exampleblock}{Proposición}
Los cuaternios unitarios, en particular, pueden escribirse como
$\cos \theta + v \sin \theta$, donde $v$ es un vector de norma unidad del
espacio $V$ visto como $\mathbb{R}^3$. A un cuaternio así escrito se le llama
\textbf{versor}.
\end{exampleblock}

\columnsend


## Conexión con SU(2)

\begin{exampleblock}{Definición}
  Llamamos $\mathrm{SU}(n)$, al grupo de las \textbf{matrices complejas unitarias} de dimensiones
  $n \times n$ que además tienen determinante $1$. Es decir,
  \[SU(n) = \left\{ M \in U_n(\mathbb{C}) \mid \mathrm{det}(M) = 1 \right\}.\]
\end{exampleblock}

\begin{exampleblock}{Teorema}
  Cada matriz en $SU(2)$ puede escribirse como
  \[\begin{pmatrix}
      a+bi & c+di \\
      -c+di & a-bi
    \end{pmatrix}\]
  donde $a,b,c,d \in \mathbb{R}$ y $a^2+b^2+c^2+d^2 = 1$.\cite{aluffi07}
\end{exampleblock}

## Cuaternios como esfera 4-dimensional

## Recubrimiento del grupo de rotaciones

- $S^3$ es un recubridor de dos hojas de $\mathbb{RP}^3$ (de hecho, es su recubridor universal).

# Rotaciones con cuaternios

## Fórmulas con cuaternios

\begin{exampleblock}{Teorema}
\textbf{Fórmula de Rodrigues para la rotación.} Si llamamos
  $\mathbf{R}_{\alpha,u}$ a la rotación de ángulo $\alpha$ sobre el
  eje dado por un vector no nulo $u$, la rotación de un vector
  $v \in\mathbb{R}^3$ se calcula como
  \[\mathbf{R_{\alpha,u}}v = v \cos \alpha + (u \times v)\sin \alpha + u(u\cdot v)(1-\cos\alpha).\]
\end{exampleblock}

## Fórmulas con cuaternios

\begin{exampleblock}{Teorema}
  \textbf{Fórmula de Rodrigues para la composición.} Si llamamos
  $\mathbf{R}_{\alpha,a}$ a la rotación de ángulo $\alpha$ sobre el
  eje dado por un vector no nulo $a$, la ecuación
  \[\mathbf{R}_{\gamma,c} =\mathbf{R}_{\alpha,a}\mathbf{R}_{\beta,b}\]
  tiene una solución con
  \[\begin{aligned}
    \cos \frac{\gamma}{2} &=
    \cos \frac{\alpha}{2} \cos\frac{\beta}{2} - \sin\frac{\alpha}{2}\sin\frac{\beta}{2} (a\cdot b)\\
    c \sin \frac{\gamma}{2} &=
    \sin \frac{\alpha}{2} \cos\frac{\beta}{2} a +
    \cos \frac{\alpha}{2} \sin\frac{\beta}{2} b +
    \sin \frac{\alpha}{2} \sin\frac{\beta}{2} (a \times b)
  \end{aligned}\] donde notamos el producto escalar como $a\cdot b$ y
  el producto vectorial como $a \times b$. \cite{vince11}
\end{exampleblock}

## Rotación con cuaternios

\begin{exampleblock}{Proposición}
Dado un vector $p$, la rotación de ángulo $\alpha$ con el eje dado por
el vector unitario $u$ es
\[ \mathbf{R}_{\alpha,u}p =
  \left(\cos \frac{\alpha}{2} + u \sin \frac{\alpha}{2}\right)
  p
  \left(\cos \frac{\alpha}{2} - u \sin \frac{\alpha}{2}\right).\]
O, si la escribimos tomando un cuaternio unitario
\[
  q = \cos \frac{\alpha}{2} + u \sin \frac{\alpha}{2},
\]
tenemos que $\mathbf{R}_{\alpha,u}p = qpq^\ast $.
\end{exampleblock}

# Aplicación en gráficos

## Exponenciación de cuaternios

\begin{exampleblock}{Definición}
  Se define la función \textbf{exponencial en cuaternios},
  $\exp \colon \mathbb{H} \to \mathbb{H}$, desde la serie de potencias
  de la función exponencial usual, es decir,
  \[\exp(q) =  1 + q + \frac{q^2}{2!} + \frac{q^3}{3!} + \dots + \frac{q^n}{n!} + \cdots\ .
  \]
\end{exampleblock}

## Spherical Linear Interpolation (SLERP)

\begin{exampleblock}{Definición}
  Para calcular la rotación interpolada, usamos la fórmula \cite{vince11}
  siguiente, con la que definimos el método \textbf{Slerp}
  \[\mathrm{Slerp}(p,q;t) = p(p^{-1}q)^t \qquad\text{ para } t \in [0,1].\]
\end{exampleblock}

## Spherical and Quadrangle (SQUAD)

\begin{exampleblock}{Definición}
Sean $a,b,p,q$ cuatro cuaternios, vistos como vértices entre los que
realizaremos la interpolación cúbica. La idea es interpolar un punto
$c$ entre $p$ y $q$ mientras que, a la vez, interpolamos un $d$ entre
$a$ y $b$; finalmente, interpolamos con una fórmula cuadrática entre
los puntos de las interpolaciones previas $d$ y $c$. Definimos la
interpolación \textbf{Squad} como
\[
  \mathrm{Squad}(p,q,a,b;t) =
  \mathrm{Slerp}(\mathrm{Slerp}(p,q;t), \mathrm{Slerp}(a,b;t); 2t(1-t)).
\]
\end{exampleblock}

# Realización práctica

## Cardán con Unity

\begin{figure}[ht!]
\centering
\includegraphics[width=0.8\textwidth]{./img/cardanflecha.png}
\caption{Escena inicial: Rotores y figura \label{figEscena}}
\end{figure}

## Cardán con Unity

\tiny

~~~js
var xRotor : GameObject;
var yRotor : GameObject;
var zRotor : GameObject;

var xRotation : Quaternion;
var yRotation : Quaternion;
var zRotation : Quaternion;

// ...

if (gameobject.name == xRotor.name) {
    Debug.Log("X: "+xRotor.transform.rotation);
    rotx += sign * speed;
    xRotor.transform.rotation = xRotation * Quaternion.Euler(0,rotx,0);
} else if (gameobject.name == yRotor.name) {
    Debug.Log("Y: "+yRotor.transform.rotation);
    roty += sign * speed;
    yRotor.transform.rotation = yRotation * Quaternion.Euler(0,roty,0);
} else if (gameobject.name == zRotor.name) {
    Debug.Log("Z: "+zRotor.transform.rotation);
    rotz += sign * speed;
    zRotor.transform.rotation = zRotation * Quaternion.Euler(0,rotz,0);
}
~~~

\normalsize

## Uso de cuaternios

\begin{figure}[ht!]
\centering
\includegraphics[width=0.8\textwidth]{./img/slerp.png}
\caption{Interpolación esférica completada \label{figEscenaSlerp}}
\end{figure}

## Uso de cuaternios

\tiny

~~~js
var t : float;
var capsule : GameObject;

// ...

if (enable_anim) {
  // update animation
  t += 0.025;
  capsule.transform.rotation = Quaternion.Slerp(initial, end, t);

  // stop animation when finished
  if (t >= 1) {
    enable_anim = false;
    t = 0;
  }
}
~~~

\normalsize
