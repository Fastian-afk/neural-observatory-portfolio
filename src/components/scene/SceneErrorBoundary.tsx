"use client";

import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { SceneFallback } from "./SceneFallback";

interface Props {
  children: ReactNode;
  onSelectStation?: (sectionId: string) => void;
}

interface State {
  hasError: boolean;
}

export class SceneErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("NeuralObservatoryScene fallback activated:", error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return <SceneFallback onSelectStation={this.props.onSelectStation} />;
    }
    return this.props.children;
  }
}
