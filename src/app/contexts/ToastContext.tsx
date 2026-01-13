"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Toast = {
  id: number;
  message: string;
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="absolute right-0 bottom-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-800 text-white m-2 p-4 rounded cursor-pointer"
            onClick={() => removeToast(toast.id)}
          >
            {toast.message}
            {toast.id}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
