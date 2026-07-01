"use client";

import * as React from "react";
import { Send, Wand2, CalendarClock, Inbox, CheckCircle2, Zap } from "lucide-react";

import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { PlatformCheckboxRow } from "@/components/dashboard/platform-checkbox-row";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { scheduledPosts as seedPosts } from "@/data/scheduler";
import { hooks } from "@/data/hooks";
import { ctas } from "@/data/ctas";
import { formatRelativeDate, platformMeta } from "@/lib/platform";
import type { Platform, ScheduledPost } from "@/lib/types";

const schedulerPlatforms: Platform[] = ["instagram", "linkedin"];

const statusVariant: Record<
  ScheduledPost["status"],
  "outline" | "secondary" | "default" | "destructive"
> = {
  draft: "outline",
  scheduled: "secondary",
  posted: "default",
  failed: "destructive",
};

function buildCaption(hookId: string, cta: string) {
  const hook = hooks.find((h) => h.id === hookId);
  if (!hook) return "";
  const tail = cta || ctas[0];
  return `${hook.hookText} A closer look at the ${hook.angle} angle for ${hook.niche} creators. ${tail}`;
}

export default function SchedulerPage() {
  const [posts, setPosts] = React.useState<ScheduledPost[]>(seedPosts);
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [hookId, setHookId] = React.useState<string>("");
  const [cta, setCta] = React.useState<string>(ctas[0]);
  const [caption, setCaption] = React.useState("");
  const [platforms, setPlatforms] = React.useState<Platform[]>(["instagram", "linkedin"]);
  const [scheduledFor, setScheduledFor] = React.useState("");

  const queued = posts.filter((p) => p.status === "draft").length;
  const upcoming = posts.filter((p) => p.status === "scheduled").length;
  const posted = posts.filter((p) => p.status === "posted").length;

  function resetForm() {
    setTitle("");
    setHookId("");
    setCta(ctas[0]);
    setCaption("");
    setPlatforms(["instagram", "linkedin"]);
    setScheduledFor("");
  }

  function handleSchedule() {
    const next: ScheduledPost = {
      id: `sp-${Date.now()}`,
      title: title || "Untitled post",
      caption,
      platforms,
      scheduledFor: scheduledFor || new Date().toISOString(),
      status: "scheduled",
      hookId: hookId || undefined,
    };
    setPosts((prev) => [next, ...prev]);
    setOpen(false);
    resetForm();
  }

  return (
    <div>
      <PageHeader
        title="Scheduler"
        description="One click schedules your post to Instagram or LinkedIn. Captions autogenerate from hook + angle + CTA, and the Zernio MCP handles the actual posting."
        action={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <Send className="size-4" />
                New post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Schedule a post</DialogTitle>
                <DialogDescription>
                  Pick a hook from your vault, generate a caption, choose platforms.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="post-title">Title</Label>
                  <Input
                    id="post-title"
                    placeholder="Hook formula breakdown"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Source hook</Label>
                  <Select
                    value={hookId}
                    onValueChange={(value) => {
                      setHookId(value);
                      setCaption(buildCaption(value, cta));
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose from Hook Vault" />
                    </SelectTrigger>
                    <SelectContent>
                      {hooks.map((hook) => (
                        <SelectItem key={hook.id} value={hook.id}>
                          {hook.hookText}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Call to action</Label>
                  <Select
                    value={cta}
                    onValueChange={(value) => {
                      setCta(value);
                      if (hookId) setCaption(buildCaption(hookId, value));
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a CTA" />
                    </SelectTrigger>
                    <SelectContent>
                      {ctas.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="post-caption">Caption</Label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs"
                      disabled={!hookId}
                      onClick={() => setCaption(buildCaption(hookId, cta))}
                    >
                      <Wand2 className="size-3.5" />
                      Autogenerate
                    </Button>
                  </div>
                  <Textarea
                    id="post-caption"
                    rows={4}
                    placeholder="Select a hook and CTA, then autogenerate a caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Platforms</Label>
                  <PlatformCheckboxRow
                    selected={platforms}
                    onChange={setPlatforms}
                    options={schedulerPlatforms}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="post-time">Scheduled for</Label>
                  <Input
                    id="post-time"
                    type="datetime-local"
                    value={scheduledFor}
                    onChange={(e) => setScheduledFor(e.target.value)}
                  />
                </div>

                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Zap className="size-3.5 text-primary" />
                  Publishing is handed off to the Zernio MCP once you schedule.
                </p>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSchedule} disabled={platforms.length === 0}>
                  Schedule to {platforms.length} platform
                  {platforms.length === 1 ? "" : "s"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-4">
        <StatCard label="Drafts queued" value={String(queued)} icon={Inbox} />
        <StatCard label="Scheduled" value={String(upcoming)} icon={CalendarClock} />
        <StatCard label="Posted this month" value={String(posted)} icon={CheckCircle2} />
        <StatCard label="Posting engine" value="Zernio MCP" icon={Zap} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post</TableHead>
                <TableHead>Platforms</TableHead>
                <TableHead>When</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="max-w-[320px]">
                    <p className="truncate font-medium">{post.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {post.caption}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1.5">
                      {post.platforms.map((platform) => {
                        const meta = platformMeta[platform];
                        const Icon = meta.icon;
                        return (
                          <Icon
                            key={platform}
                            className={`size-4 ${meta.className}`}
                          />
                        );
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatRelativeDate(post.scheduledFor)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[post.status]} className="capitalize">
                      {post.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
