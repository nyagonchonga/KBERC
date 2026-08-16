'use client';

import React from 'react';

export default function ViewerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', color: '#0F172A' }}>
      {children}
    </div>
  );
}
