import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function LLMRoboticsPapersChart() {
  // Accurate count from GitHub repo - combining Task Planning + Planning sections
  const data = [
    { name: 'Task Planning & Decomposition', value: 31, color: '#FF6B6B' },
    { name: 'Object Manipulation & Grasping', value: 18, color: '#4ECDC4' },
    { name: 'Reasoning', value: 17, color: '#45B7D1' },
    { name: 'Spatial Reasoning & Navigation', value: 12, color: '#96CEB4' },
    { name: 'Safety, Risks & Evaluation', value: 10, color: '#F39C12' },
    { name: 'Simulation Frameworks', value: 10, color: '#9B59B6' },
    { name: 'Surveys', value: 9, color: '#1ABC9C' },
    { name: 'Scene Understanding & Perception', value: 7, color: '#FFEAA7' },
    { name: 'Human-Robot Interaction', value: 5, color: '#DDA0DD' },
  ];

  const totalPapers = data.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      const percentage = ((item.value / totalPapers) * 100).toFixed(1);
      return (
        <div style={{
          background: 'rgba(20, 20, 35, 0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
        }}>
          <p style={{ 
            color: item.color, 
            fontWeight: 700, 
            margin: 0,
            fontSize: '15px',
            letterSpacing: '0.3px'
          }}>
            {item.name}
          </p>
          <p style={{ 
            color: '#E8E8E8', 
            margin: '8px 0 0 0',
            fontSize: '14px'
          }}>
            <span style={{ fontWeight: 600 }}>{item.value}</span> papers ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent < 0.045) return null;

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ 
          fontSize: '13px', 
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        {data[index].value}
      </text>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0D0D1A 0%, #1A1A2E 50%, #16213E 100%)',
      padding: '40px 20px',
      fontFamily: '"Outfit", "SF Pro Display", -apple-system, sans-serif',
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        `}
      </style>
      
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
            padding: '6px 20px',
            borderRadius: '30px',
            marginBottom: '20px',
          }}>
            <span style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0D0D1A',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              TTZ-KT Research Analysis
            </span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #A8A8A8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 16px 0',
            letterSpacing: '-1px',
          }}>
            LLMs in Robotics
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#8B8B9E',
            margin: 0,
            fontWeight: 400,
          }}>
            Distribution of <span style={{ color: '#4ECDC4', fontWeight: 700 }}>{totalPapers} papers</span> across research areas
          </p>
        </div>

        {/* Key Insight Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.05) 100%)',
          border: '1px solid rgba(255, 107, 107, 0.3)',
          borderRadius: '16px',
          padding: '24px 30px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}>
          <div style={{
            fontSize: '48px',
            lineHeight: 1,
          }}>🎯</div>
          <div>
            <div style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#FF6B6B',
              marginBottom: '6px',
            }}>
              Task Planning Dominates LLM-Robotics Research
            </div>
            <div style={{
              fontSize: '15px',
              color: '#A8A8B8',
              lineHeight: 1.5,
            }}>
              <strong style={{ color: '#FF6B6B' }}>31 papers (26.1%)</strong> focus on Task Planning & Decomposition — 
              the largest single application area, demonstrating LLMs' strength in breaking down complex tasks into executable steps.
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '40px',
        }}>
          {[
            { label: 'Total Papers', value: totalPapers, icon: '📄' },
            { label: 'Research Areas', value: data.length, icon: '🔬' },
            { label: 'Top Area', value: 'Task Planning', icon: '🧠' },
            { label: 'Top Area %', value: '26.1%', icon: '📊' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6B6B7E',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '24px',
          padding: '40px 20px',
          marginBottom: '40px',
        }}>
          <ResponsiveContainer width="100%" height={420}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={160}
                innerRadius={60}
                dataKey="value"
                stroke="rgba(0,0,0,0.3)"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    style={{
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Center label */}
          <div style={{
            position: 'relative',
            marginTop: '-250px',
            textAlign: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              fontSize: '14px',
              color: '#6B6B7E',
              fontWeight: 500,
            }}>TOTAL</div>
            <div style={{
              fontSize: '36px',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: '"Space Mono", monospace',
            }}>{totalPapers}</div>
            <div style={{
              fontSize: '12px',
              color: '#6B6B7E',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>Papers</div>
          </div>
          <div style={{ height: '180px' }} />
        </div>

        {/* Legend Grid - Sorted by value */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {data.sort((a, b) => b.value - a.value).map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: index === 0 
                  ? 'rgba(255, 107, 107, 0.1)' 
                  : 'rgba(255,255,255,0.02)',
                border: index === 0 
                  ? '2px solid rgba(255, 107, 107, 0.4)' 
                  : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '16px 20px',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{
                width: '14px',
                height: '14px',
                borderRadius: '4px',
                background: item.color,
                marginRight: '14px',
                boxShadow: `0 0 12px ${item.color}40`,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: index === 0 ? 700 : 600,
                  color: index === 0 ? '#FF6B6B' : '#E8E8E8',
                  marginBottom: '2px',
                }}>
                  {item.name}
                  {index === 0 && <span style={{ 
                    marginLeft: '8px', 
                    fontSize: '10px',
                    background: '#FF6B6B',
                    color: '#0D0D1A',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 700,
                  }}>TOP</span>}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#6B6B7E',
                }}>
                  {((item.value / totalPapers) * 100).toFixed(1)}% of total
                </div>
              </div>
              <div style={{
                fontSize: '20px',
                fontWeight: 800,
                color: item.color,
                fontFamily: '"Space Mono", monospace',
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div style={{
          marginTop: '40px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '16px',
          padding: '30px',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 16px 0',
          }}>📈 Key Findings</h3>
          <ul style={{
            margin: 0,
            padding: '0 0 0 20px',
            color: '#A8A8B8',
            fontSize: '14px',
            lineHeight: 1.8,
          }}>
            <li><strong style={{ color: '#FF6B6B' }}>Task Planning</strong> is the dominant application (26.1%) — LLMs excel at decomposing high-level goals into actionable steps</li>
            <li><strong style={{ color: '#4ECDC4' }}>Manipulation</strong> (15.1%) and <strong style={{ color: '#45B7D1' }}>Reasoning</strong> (14.3%) follow as key research areas</li>
            <li><strong style={{ color: '#96CEB4' }}>Navigation</strong> (10.1%) shows strong interest in spatial understanding</li>
            <li>Combined <strong>Planning + Navigation = 36.2%</strong> of all papers — confirming planning as the primary LLM application in robotics</li>
          </ul>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{
            fontSize: '13px',
            color: '#4A4A5E',
            margin: 0,
          }}>
            Source: github.com/TTZ-KT/LLMs-Used-in-Robotics • Total: {totalPapers} papers • Last updated: December 2025
          </p>
        </div>
      </div>
    </div>
  );
}
