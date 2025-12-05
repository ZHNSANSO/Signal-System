
interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const blankAnswersBatch2: Record<number, QuestionAnswer> = {
  51: {
    correctOptionId: "第一空：\\(\\frac{2}{(s+1)^2+4}\\)；第二空：\\((e^{2t}-e^t)u(t)\\)",
    explanation: `本题考查 **拉氏变换对**。

**第一空**
\\(e^{-t}\\sin 2t \\leftrightarrow \\frac{2}{(s+1)^2+2^2} = \\frac{2}{(s+1)^2+4}\\)

**第二空**
\\(F(s) = \\frac{1}{(s-1)(s-2)} = \\frac{1}{s-2} - \\frac{1}{s-1}\\)
逆变换：\\(e^{2t}u(t) - e^t u(t)\\)

**结论：**
填 \\(\\frac{2}{(s+1)^2+4}\\) 和 \\((e^{2t}-e^t)u(t)\\)。`
  },
  52: {
    correctOptionId: "\\(\\cos\\omega_0(t+1)\\)",
    explanation: `本题考查 **卷积时移**。

**公式**
\\(f(t) * \\delta(t+1) = f(t+1)\\)

**计算**
\\(result = \\cos\\omega_0(t+1)\\)

**结论：**
填 \\(\\cos\\omega_0(t+1)\\)。`
  },
  53: {
    correctOptionId: "1",
    explanation: `本题考查 **筛选性质**。

**计算**
冲激点 \\(t=0\\)。
\\(Result = \\cos(\\omega_0 \\cdot 0) = 1\\)

**结论：**
填 1。`
  },
  54: {
    correctOptionId: "第一空：\\(\\frac{1}{(s+2)^2}\\)；第二空：\\((6e^{-4t}-3e^{-2t})u(t)\\)",
    explanation: `本题考查 **拉氏变换性质**。

**第一空**
\\(t \\leftrightarrow 1/s^2\\)。
\\(te^{-2t} \\leftrightarrow \\frac{1}{(s+2)^2}\\)。

**第二空**
\\(F(s) = \\frac{3s}{(s+4)(s+2)} = \\frac{6}{s+4} + \\frac{-3}{s+2}\\)
逆变换：\\(6e^{-4t}u(t) - 3e^{-2t}u(t)\\)

**结论：**
填 \\(\\frac{1}{(s+2)^2}\\) 和 \\((6e^{-4t}-3e^{-2t})u(t)\\)。`
  },
  55: {
    correctOptionId: "\\(2u(t-2)\\)",
    explanation: `本题考查 **冲激取样与积分**。

**步骤**
1. 取样：\\(\\tau\\delta(\\tau-2) = 2\\delta(\\tau-2)\\)。
2. 积分：\\(\\int_{-\\infty}^t 2\\delta(\\tau-2) d\\tau = 2u(t-2)\\)。

**结论：**
填 \\(2u(t-2)\\)。`
  },
  56: {
    correctOptionId: "\\(-1 < k < 1\\)",
    explanation: `本题考查 **系统稳定性**。

**分析**
分母 \\(s^2 + (1-k)s + (k+1) = 0\\)。
稳定条件：所有系数大于 0。
1. \\(1-k > 0 \\implies k < 1\\)
2. \\(k+1 > 0 \\implies k > -1\\)

**结论：**
填 \\(-1 < k < 1\\)。`
  },
  57: {
    correctOptionId: "\\(\\delta(t)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(\\delta(t)\\cos(0) = \\delta(t) \\cdot 1 = \\delta(t)\\)。

**结论：**
填 \\(\\delta(t)\\)。`
  },
  58: {
    correctOptionId: "\\(\\cos\\omega_0 u(t+1)\\)",
    explanation: `本题考查 **冲激函数性质**。

**1. 取样**
\\(\\delta(\\tau+1)\\cos(\\omega_0\\tau) = \\delta(\\tau+1)\\cos(-\\omega_0) = \\cos\\omega_0\\delta(\\tau+1)\\)。

**2. 积分**
\\(\\cos\\omega_0 \\int_{-\\infty}^t \\delta(\\tau+1) d\\tau = \\cos\\omega_0 u(t+1)\\)

**结论：**
填 \\(\\cos\\omega_0 u(t+1)\\)。`
  },
  59: {
    correctOptionId: "见解析",
    explanation: `本题考查 **傅里叶变换性质**。

1. **调制**：
   \\(f(t)\\cos 200t \\leftrightarrow \\frac{1}{2}[F(\\omega+200) + F(\\omega-200)]\\)

2. **频域微分**：
   \\(tf(t) \\leftrightarrow j\\frac{d}{d\\omega}F(\\omega)\\)

3. **尺度时移** \\(f(3t-3)\\)：
   \\(\\frac{1}{3}F(\\frac{\\omega}{3})e^{-j\\omega}\\)

4. **尺度时移** \\(f(2t-5)\\)：
   \\(\\frac{1}{2}F(\\frac{\\omega}{2})e^{-j\\frac{5}{2}\\omega}\\)

5. **反转尺度** \\(f(3-2t)\\)：
   \\(\\frac{1}{2}F(-\\frac{\\omega}{2})e^{-j\\frac{3}{2}\\omega}\\)`
  },
  60: {
    correctOptionId: "\\(-0.75 < k < 0.75\\)",
    explanation: `本题考查 **朱利判据**。

**分析**
特征方程 \\(z^2 - kz - 0.25 = 0\\)。
1. \\(D(1) = 0.75 - k > 0 \\implies k < 0.75\\)
2. \\(D(-1) = 0.75 + k > 0 \\implies k > -0.75\\)
3. \\(|-0.25| < 1\\) (成立)

**结论：**
填 \\(-0.75 < k < 0.75\\)。`
  },
  61: {
    correctOptionId: "\\(\\cos\\omega_0(t-\\tau)\\)",
    explanation: `本题考查 **卷积性质**。

**计算**
\\(f(t) * \\delta(t) = f(t)\\)
这里 \\(f(t) = \\cos\\omega_0(t-\\tau)\\)。

**结论：**
填 \\(\\cos\\omega_0(t-\\tau)\\)。`
  },
  62: {
    correctOptionId: "\\(\\frac{1}{2\\pi}e^{j2t}\\)",
    explanation: `本题考查 **傅里叶逆变换**。

**计算**
\\(f(t) = \\frac{1}{2\\pi} \\int \\delta(\\omega-2)e^{j\\omega t} d\\omega = \\frac{1}{2\\pi} e^{j2t}\\)

**结论：**
填 \\(\\frac{1}{2\\pi}e^{j2t}\\)。`
  },
  63: {
    correctOptionId: "第一空：\\(u(n)\\)；第二空：\\(-u(-n-1)\\)",
    explanation: `本题考查 **Z 变换**。

**分析**
\\(X(z) = \\frac{z}{z-1}\\)
- **\\(|z|>1\\)**：因果，对应 \\(u(n)\\)。
- **\\(|z|<1\\)**：反因果，对应 \\(-u(-n-1)\\)。

**结论：**
填 \\(u(n)\\) 和 \\(-u(-n-1)\\)。`
  },
  64: {
    correctOptionId: "\\(\\delta(t)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(\\delta(t) e^{-a(0)} = \\delta(t) \\cdot 1 = \\delta(t)\\)

**结论：**
填 \\(\\delta(t)\\)。`
  },
  65: {
    correctOptionId: "见解析",
    explanation: `本题考查 **Z 逆变换**。

**展开**
\\(X(z) = \\frac{-z}{z-1} + \\frac{z}{z-2}\\)

1. **\\(|z|>2\\)**：\\((2^n - 1)u(n)\\)
2. **\\(|z|<1\\)**：\\((1-2^n)u(-n-1)\\)
3. **\\(1<|z|<2\\)**：\\(-u(n) - 2^n u(-n-1)\\)`
  },
  66: {
    correctOptionId: "\\(\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty\\)",
    explanation: `本题考查 **稳定性**。

**结论**
绝对可和：
\\(\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty\\)

**结论：**
填 \\(\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty\\)。`
  },
  67: {
    correctOptionId: "1",
    explanation: `本题考查 **筛选性质**。

**计算**
\\(Result = \\cos(0) = 1\\)

**结论：**
填 1。`
  },
  68: {
    correctOptionId: "4, 6, 2",
    explanation: `本题考查 **带宽变化**。

1. **\\(f(2t)\\)**：频带展宽 2 倍，\\(f_m=2k\\)，采样 \\(4k\\)。
2. **\\(f^3(t)\\)**：频域卷积，带宽相加，\\(f_m=3k\\)，采样 \\(6k\\)。
3. **\\(f(t)*f(2t)\\)**：频域相乘，带宽取交集，\\(f_m=1k\\)，采样 \\(2k\\)。

**结论：**
填 4, 6, 2。`
  },
  69: {
    correctOptionId: "\\(\\delta(t - \\frac{\\pi}{2})\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(Coef = 1 - \\cos(\\frac{\\pi}{2}) = 1\\)
\\(Result = 1 \\cdot \\delta(t - \\frac{\\pi}{2})\\)

**结论：**
填 \\(\\delta(t - \\frac{\\pi}{2})\\)。`
  }
};
