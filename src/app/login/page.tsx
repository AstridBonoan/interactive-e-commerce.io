"use client";

import { StoreHeader } from "@/components/store/StoreChrome";
import { useAuth } from "@/lib/auth-context";
import { useState } from "react";

export default function LoginPage() {
  const { enabled, signIn, signUp, user, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  return (
    <main className="page-shell">
      <StoreHeader />
      <div className="panel-card max-w-lg space-y-3">
        <h1 className="display-title text-4xl">Sign in</h1>
        {!enabled ? (
          <p>
            Supabase Auth is not configured yet. The shop, cart, and local CMS still work. Add
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_URL</code> and
            <code className="mx-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable accounts.
          </p>
        ) : user ? (
          <div className="space-y-3">
            <p>Signed in as {user.email}</p>
            <button className="ink-button" onClick={() => void signOut()}>
              Sign out
            </button>
          </div>
        ) : (
          <>
            <input className="ink-input w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
              className="ink-input w-full"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {message ? <p className="text-sm">{message}</p> : null}
            <div className="flex gap-3">
              <button
                className="ink-button-solid"
                onClick={async () => setMessage((await signIn(email, password)) ?? "Welcome back.")}
              >
                Sign in
              </button>
              <button
                className="ink-button"
                onClick={async () => setMessage((await signUp(email, password)) ?? "Check your inbox.")}
              >
                Create account
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
