export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      channel: {
        Row: {
          backdrop_url: string | null
          channel_id: string
          channel_info_meta: Json
          channel_videos_count: number
          created_at: string
          id: string
          name: string | null
          picture_url: string
          subscribers_count: number
          user_id: string
        }
        Insert: {
          backdrop_url?: string | null
          channel_id: string
          channel_info_meta?: Json
          channel_videos_count: number
          created_at?: string
          id?: string
          name?: string | null
          picture_url: string
          subscribers_count: number
          user_id: string
        }
        Update: {
          backdrop_url?: string | null
          channel_id?: string
          channel_info_meta?: Json
          channel_videos_count?: number
          created_at?: string
          id?: string
          name?: string | null
          picture_url?: string
          subscribers_count?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "channel_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      channel_token: {
        Row: {
          access_token: string
          channel_id: string
          created_at: string
          id: number
          refresh_token: string
          updated_at: string | null
        }
        Insert: {
          access_token: string
          channel_id: string
          created_at?: string
          id?: number
          refresh_token: string
          updated_at?: string | null
        }
        Update: {
          access_token?: string
          channel_id?: string
          created_at?: string
          id?: number
          refresh_token?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
