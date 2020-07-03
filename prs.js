package com.kendric.paper.rock.scissors;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
    /** Called when the user clicks the Paper button */
    public void paper_(View view) {
    	TextView Pa = (TextView)findViewById(R.id.textView3);
    	Pa.setText(whoWon(1, "Paper"));
    }
    public void rock_(View view) {
    	TextView Ro = (TextView)findViewById(R.id.textView3);
    	Ro.setText(whoWon(2, "Rock"));
    }
    public void scissors_(View view) {
    	TextView Sc = (TextView)findViewById(R.id.textView3);
    	Sc.setText(whoWon(3, "Scissors"));
    }

    private String whoWon(int p, String choice) {
    	
    	int computer = (int) (Math.floor(Math.random() * 3) + 1);
    	int calc = p - computer;
    	String winner = "Error: Try Again?";
    	String comp_text = comp_choice(computer);
    	
    	TextView txt1 = (TextView)findViewById(R.id.textView1);
    	txt1.setText("You chose: " + choice);
    	TextView txt2 = (TextView)findViewById(R.id.textView2);
    	txt2.setText("I chose: " + comp_text);
    	
    	if (Math.abs(calc) > 1) {
    		calc = calc * -1;
    	}
    	if (calc < 0) {
    		winner = choice + " " + verb(p, computer) + " " + comp_text + "\n\nYou Win";
    	} else if (calc > 0) {
    		winner = comp_text + " " + verb(computer, p) + " " + choice + "\n\nI Win";
    	} else if (calc == 0) {
    		winner = "We both chose " + choice + "\n\nIt's a  Tie";
    	}
       	return winner;
    	}

	private String verb(int w, int l) {
		String txt = "beats";
		
		switch((w * 10) + l){
			case 12:
				txt = "covers";
				break;
			
			case 23:
				txt = "smashes";
				break;
			
			case 31:
				txt = "cuts";
				break;
			}
				
			return txt;
	}

	private String comp_choice(int computer) {
		String text_ = "";

		switch (computer) {
			case 1 :
				text_ = "Paper";
    			break;
    		case 2 :
    			text_ = "Rock";
    			break;
    		case 3 :
    			text_ = "Scissors";
    			break;
    	}  	
		return text_;
	}
}