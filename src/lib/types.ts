export interface Database {
  public: {
    Tables: {
      stickers: {
        Row: {
            id: number;
            name: string;
            image_url: string;
            active: boolean;
            price: number;
        };
        Insert: Omit<Database['public']['Tables']['stickers']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['stickers']['Insert']>;
      };
      tickets: {
        Row: {
          id: string;
          tier: string;
          description: string;
          price: number;
          available: boolean;
          ticket_url: string;
          max_quantity: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['tickets']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['tickets']['Insert']>;
      };
    };
  };
}

export type Sticker = Database['public']['Tables']['stickers']['Row'];
export type Ticket = Database['public']['Tables']['tickets']['Row'];
