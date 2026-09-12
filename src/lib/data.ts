import {
  ArrowLeftRight,
  BadgeCheck,
  Bell,
  Coins,
  Copy,
  FileSpreadsheet,
  Fingerprint,
  Globe,
  Layers,
  LineChart,
  Lock,
  QrCode,
  Send,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Networks", href: "#networks" },
  { label: "Security", href: "#security" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export type MiniFeature = { icon: LucideIcon; title: string; desc: string };

export const oneWalletFeatures: MiniFeature[] = [
  { icon: ArrowLeftRight, title: "Swap tokens", desc: "Swap thousands of tokens across chains in seconds." },
  { icon: ShoppingCart, title: "Buy & sell", desc: "Buy crypto with card, bank or Apple Pay." },
  { icon: Send, title: "Send & receive", desc: "Send to address, ENS or QR in one tap." },
  { icon: FileSpreadsheet, title: "Export to Excel", desc: "Export full history for tax & accounting." },
  { icon: Layers, title: "Multi-chain", desc: "Ethereum, BNB, Polygon, Solana & more." },
  { icon: LineChart, title: "Track your portfolio", desc: "Live prices, P&L and alerts in one view." },
];

export const grid12: MiniFeature[] = [
  { icon: Lock, title: "Self-custody", desc: "Only you hold the keys." },
  { icon: Zap, title: "Fast transactions", desc: "Optimised gas & routing." },
  { icon: Globe, title: "Web3 apps", desc: "Connect to any dApp." },
  { icon: Bell, title: "Price alerts", desc: "Never miss a move." },
  { icon: Wallet, title: "Multi-wallet", desc: "Manage unlimited wallets." },
  { icon: Fingerprint, title: "Biometric lock", desc: "Face ID & secure enclave." },
  { icon: Copy, title: "Address book", desc: "Save & reuse contacts." },
  { icon: QrCode, title: "QR receive", desc: "Share address via QR." },
  { icon: ShieldCheck, title: "Scam protection", desc: "Malicious dApp warnings." },
  { icon: Coins, title: "Staking", desc: "Earn yield on assets." },
  { icon: Smartphone, title: "Mobile first", desc: "iOS & Android native." },
  { icon: Sparkles, title: "NFT gallery", desc: "View all collectibles." },
];

export const tokens = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,240", change: "+2.4%", up: true, color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", price: "$2,477.07", change: "+0.278%", up: true, color: "#627EEA" },
  { symbol: "SOL", name: "Solana", price: "$142.18", change: "-1.2%", up: false, color: "#9945FF" },
  { symbol: "BNB", name: "BNB Chain", price: "$598.4", change: "+0.8%", up: true, color: "#F0B90B" },
];

export const networks = [
  { name: "Ethereum", tag: "ETH", color: "#627EEA" },
  { name: "BNB Chain", tag: "BNB", color: "#F0B90B" },
  { name: "Polygon", tag: "MATIC", color: "#8247E5" },
  { name: "Solana", tag: "SOL", color: "#14F195" },
  { name: "Arbitrum", tag: "ARB", color: "#28A0F0" },
  { name: "Base", tag: "BASE", color: "#0052FF" },
];

export const securityItems = [
  { icon: Lock, title: "Self-custody", desc: "Keys stay on your device, never on a server." },
  { icon: Fingerprint, title: "Secure enclave", desc: "Hardware-backed key storage + biometrics." },
  { icon: ShieldCheck, title: "Seed phrase control", desc: "Encrypted backup, you own recovery." },
  { icon: BadgeCheck, title: "Privacy first", desc: "No tracking, no data selling, ever." },
  { icon: Globe, title: "Open & transparent", desc: "Audited code and public security reports." },
];

export const faqs = [
  { q: "What is Dorsen Wallet?", a: "Dorsen Wallet is a self-custody crypto wallet. You hold your keys, your assets and full control — across multiple chains in one app." },
  { q: "Is Dorsen Wallet self-custodial?", a: "Yes. Keys are generated and stored on your device with secure-enclave protection. We can never access or freeze your funds." },
  { q: "Which blockchains are supported?", a: "Ethereum, BNB Chain, Polygon, Solana, Arbitrum, Base and more — with native swaps and bridging." },
  { q: "How do I back up my wallet?", a: "Write down your 12-word recovery phrase on setup and store it offline. Enable biometric lock for daily use." },
  { q: "Can I buy crypto inside the app?", a: "Yes — buy with card, bank transfer or Apple Pay, then swap, send or stake directly." },
  { q: "How do I connect to Web3 dApps?", a: "Tap Connect, scan WalletConnect QR or use the in-app browser. Approve each session per site." },
  { q: "Is there a fee to use Dorsen Wallet?", a: "The app is free. You only pay network gas + provider fees on buys/swaps, shown before you confirm." },
  { q: "How is my privacy protected?", a: "No account, no email required, no tracking. Portfolio data stays local unless you enable cloud backup." },
];

export const footerCols = [
  { title: "About Dorsen", links: ["About us", "Careers", "Press", "Blog"] },
  { title: "Products", links: ["Mobile wallet", "Swap", "Staking", "NFTs"] },
  { title: "Resources", links: ["Help center", "Developers", "Security", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Licenses", "Contact"] },
];
